'use client';

import { useState, useEffect, useRef } from 'react';
import { TimeState } from '@/types/clock';

const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000; // +5:30 in milliseconds

export function useISTTime() {
  const [timeState, setTimeState] = useState<TimeState>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    timeString: '--:--:--',
    dateString: '',
    isSynced: false,
    syncSource: 'Local System',
    offsetMs: 0,
  });

  const offsetMsRef = useRef<number>(0);
  const animFrameRef = useRef<number | null>(null);

  // Synchronize IST offset from reliable API
  useEffect(() => {
    let isMounted = true;

    async function syncISTTime() {
      try {
        const startFetch = Date.now();
        // Primary API: timeapi.io
        const res = await fetch('https://timeapi.io/api/v1/time/current/zone?timeZone=Asia/Kolkata', {
          cache: 'no-store',
        });
        
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        
        const roundtrip = Date.now() - startFetch;
        const latencyOffset = roundtrip / 2;

        // Construct target API date object
        const apiDate = new Date(data.dateTime);
        const serverTimestamp = apiDate.getTime() + latencyOffset;
        const computedOffset = serverTimestamp - Date.now();

        if (isMounted) {
          offsetMsRef.current = computedOffset;
          setTimeState((prev) => ({
            ...prev,
            isSynced: true,
            syncSource: 'API',
            offsetMs: computedOffset,
          }));
        }
      } catch (err) {
        console.warn('Primary IST time API fetch failed, trying fallback offset calculation:', err);
        if (isMounted) {
          // Fallback: Compute IST (+5:30) offset relative to UTC
          const now = new Date();
          const utcTimestamp = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
          const istTimestamp = utcTimestamp + IST_OFFSET_MS;
          const fallbackOffset = istTimestamp - now.getTime();

          offsetMsRef.current = fallbackOffset;
          setTimeState((prev) => ({
            ...prev,
            isSynced: true,
            syncSource: 'Local (Calculated Offset)',
            offsetMs: fallbackOffset,
          }));
        }
      }
    }

    syncISTTime();
  }, []);

  // RAF Continuous smooth update
  useEffect(() => {
    const updateTime = () => {
      const now = new Date(Date.now() + offsetMsRef.current);
      
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const milliseconds = now.getMilliseconds();

      const timeString = now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      const dateString = now.toLocaleDateString('en-IN', {
        timeZone: 'Asia/Kolkata',
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });

      setTimeState((prev) => ({
        ...prev,
        hours,
        minutes,
        seconds,
        milliseconds,
        timeString,
        dateString,
      }));

      animFrameRef.current = requestAnimationFrame(updateTime);
    };

    animFrameRef.current = requestAnimationFrame(updateTime);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return timeState;
}
