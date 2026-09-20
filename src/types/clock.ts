export type ThemeMode = 'gothic' | 'neon' | 'cyberpunk' | 'silk' | 'emerald';

export interface ClockSettings {
  theme: ThemeMode;
  spiderColor: string;
  accentColor: string;
  spiderGlow: number; // 0 to 100
  webOpacity: number; // 0 to 100
  webSpeed: number; // 0.1 to 3
  is12Hour: boolean;
  showNumbers: boolean;
  showDigitalClock: boolean;
  showSeconds: boolean;
  showDate: boolean;
  soundEnabled: boolean;
  tickVolume: number; // 0 to 100
  reducedMotion: boolean;
}

export interface TimeState {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  timeString: string;
  dateString: string;
  isSynced: boolean;
  syncSource: 'API' | 'Local (Calculated Offset)' | 'Local System';
  offsetMs: number;
}
