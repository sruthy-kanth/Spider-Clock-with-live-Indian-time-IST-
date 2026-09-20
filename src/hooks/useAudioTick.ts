'use client';

import { useEffect, useRef, useCallback } from 'react';

export function useAudioTick(seconds: number, soundEnabled: boolean, volume: number) {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const prevSecondRef = useRef<number>(seconds);

  const initAudio = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  }, []);

  const playTick = useCallback(
    (isMajorTick: boolean = false) => {
      if (!soundEnabled || !audioCtxRef.current || volume <= 0) return;

      const ctx = audioCtxRef.current;
      if (ctx.state !== 'running') return;

      const now = ctx.currentTime;
      const gainNode = ctx.createGain();
      
      const vol = (volume / 100) * 0.15;
      gainNode.gain.setValueAtTime(vol, now);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + (isMajorTick ? 0.08 : 0.04));

      // Synthesize wooden/mechanical tick sound using filtered short noise + impulse sine tone
      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(isMajorTick ? 1200 : 800, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.03);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    },
    [soundEnabled, volume]
  );

  useEffect(() => {
    if (seconds !== prevSecondRef.current) {
      prevSecondRef.current = seconds;
      playTick(seconds === 0);
    }
  }, [seconds, playTick]);

  return { initAudio };
}
