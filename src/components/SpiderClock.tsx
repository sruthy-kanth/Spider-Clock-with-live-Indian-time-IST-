'use client';

import React, { useState, useEffect } from 'react';
import { useISTTime } from '@/hooks/useISTTime';
import { useAudioTick } from '@/hooks/useAudioTick';
import { ClockSettings, ThemeMode } from '@/types/clock';
import { WebBackground } from './WebBackground';
import { ClockNumbers } from './ClockNumbers';
import { SpiderBody } from './SpiderBody';
import { SpiderLegs } from './SpiderLegs';
import { DigitalClock } from './DigitalClock';
import { SettingsPanel } from './SettingsPanel';

const DEFAULT_SETTINGS: ClockSettings = {
  theme: 'gothic',
  spiderColor: '#ffffff',
  accentColor: '#93c5fd',
  spiderGlow: 65,
  webOpacity: 45,
  webSpeed: 1,
  is12Hour: true,
  showNumbers: true,
  showDigitalClock: true,
  showSeconds: true,
  showDate: true,
  soundEnabled: false,
  tickVolume: 35,
  reducedMotion: false,
};

const THEME_STYLES: Record<
  ThemeMode,
  { bg: string; spider: string; accent: string }
> = {
  gothic: { bg: '#08080a', spider: '#ffffff', accent: '#60a5fa' },
  neon: { bg: '#090514', spider: '#f472b6', accent: '#c084fc' },
  cyberpunk: { bg: '#030a16', spider: '#22d3ee', accent: '#f43f5e' },
  silk: { bg: '#121316', spider: '#ffffff', accent: '#fb7185' },
  emerald: { bg: '#02140d', spider: '#34d399', accent: '#a7f3d0' },
};

export const SpiderClock: React.FC = () => {
  const [settings, setSettings] = useState<ClockSettings>(DEFAULT_SETTINGS);
  const [isMounted, setIsMounted] = useState(false);

  const timeState = useISTTime();
  const { initAudio } = useAudioTick(
    timeState.seconds,
    settings.soundEnabled,
    settings.tickVolume
  );

  // Load saved settings from localStorage safely
  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem('spider_clock_settings');
      if (saved) {
        setSettings({ ...DEFAULT_SETTINGS, ...JSON.parse(saved) });
      }
    } catch (e) {
      console.warn('Failed to load settings from localStorage:', e);
    }
  }, []);

  // Save settings updates
  const updateSettings = (newSettings: Partial<ClockSettings>) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings };
      try {
        localStorage.setItem('spider_clock_settings', JSON.stringify(updated));
      } catch (e) {
        console.warn('Failed to save settings:', e);
      }
      return updated;
    });
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
    try {
      localStorage.removeItem('spider_clock_settings');
    } catch (e) {
      console.warn('Failed to clear settings:', e);
    }
  };

  // Center coordinate of canvas
  const cx = 400;
  const cy = 400;

  const currentTheme = THEME_STYLES[settings.theme] || THEME_STYLES.gothic;
  const spiderColor = settings.spiderColor || currentTheme.spider;
  const accentColor = settings.accentColor || currentTheme.accent;

  if (!isMounted) return null;

  return (
    <main
      className="relative w-full h-[100dvh] min-h-[100dvh] overflow-hidden flex flex-col items-center justify-between p-2 sm:p-4 transition-colors duration-700 select-none"
      style={{ backgroundColor: currentTheme.bg }}
      onClick={initAudio}
    >
      {/* Title Header */}
      <header className="z-10 text-center shrink-0 mt-1 sm:mt-2">
        <h1 className="text-lg sm:text-2xl font-serif tracking-widest text-white/90 font-bold uppercase drop-shadow-lg">
          Spider Clock
        </h1>
        <p className="text-[10px] sm:text-xs text-gray-400/80 font-light mt-0.5 tracking-wider">
          Indian Standard Time • Precision Artistry
        </p>
      </header>

      {/* Viewport-Constrained Responsive Clock Stage */}
      <div className="relative flex-1 flex items-center justify-center w-full min-h-0 py-1">
        <div
          className="relative aspect-square flex items-center justify-center max-w-full max-h-full"
          style={{
            width: 'min(92vw, calc(100vh - 150px), 760px)',
            height: 'min(92vw, calc(100vh - 150px), 760px)',
          }}
        >
          {/* Master Unified Vector Canvas */}
          <svg
            viewBox="0 0 800 800"
            className="w-full h-full overflow-visible drop-shadow-2xl"
          >
            {/* Layer 1: Rotating Small Web Mandalas */}
            <WebBackground
              opacity={settings.webOpacity}
              speed={settings.webSpeed}
              accentColor={accentColor}
              reducedMotion={settings.reducedMotion}
            />

            {/* Layer 2: Soft Background Numerals 1-12 */}
            <ClockNumbers
              showNumbers={settings.showNumbers}
              currentHour={timeState.hours}
              currentMinute={timeState.minutes}
              accentColor={accentColor}
            />

            {/* Layer 3: Spider Leg Pointers & Silhouette */}
            <SpiderLegs
              cx={cx}
              cy={cy}
              hours={timeState.hours}
              minutes={timeState.minutes}
              seconds={timeState.seconds}
              milliseconds={timeState.milliseconds}
              showSeconds={settings.showSeconds}
              spiderColor={spiderColor}
              accentColor={accentColor}
              reducedMotion={settings.reducedMotion}
            />

            {/* Layer 4: Centered Spider Body & Hanging Silk Thread */}
            <SpiderBody
              cx={cx}
              cy={cy}
              spiderColor={spiderColor}
              accentColor={accentColor}
              glowIntensity={settings.spiderGlow}
              reducedMotion={settings.reducedMotion}
            />
          </svg>
        </div>
      </div>

      {/* Digital Time & Date Overlay at Bottom */}
      <footer className="z-10 shrink-0 pb-2 sm:pb-4 flex justify-center">
        <DigitalClock
          timeState={timeState}
          showDigitalClock={settings.showDigitalClock}
          showDate={settings.showDate}
          accentColor={accentColor}
        />
      </footer>

      {/* Customization Settings Drawer */}
      <SettingsPanel
        settings={settings}
        updateSettings={updateSettings}
        resetSettings={resetSettings}
        onAudioUnlock={initAudio}
      />
    </main>
  );
};
