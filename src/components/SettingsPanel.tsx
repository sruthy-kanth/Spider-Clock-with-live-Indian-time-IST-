'use client';

import React, { useState } from 'react';
import { ClockSettings, ThemeMode } from '@/types/clock';
import {
  Settings,
  X,
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Sparkles,
  Maximize2,
  RotateCcw,
} from 'lucide-react';

interface SettingsPanelProps {
  settings: ClockSettings;
  updateSettings: (newSettings: Partial<ClockSettings>) => void;
  resetSettings: () => void;
  onAudioUnlock: () => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  settings,
  updateSettings,
  resetSettings,
  onAudioUnlock,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const themePresets: { id: ThemeMode; label: string; bg: string; accent: string }[] = [
    { id: 'gothic', label: 'Dark Gothic', bg: '#08080a', accent: '#e2e8f0' },
    { id: 'neon', label: 'Electric Neon', bg: '#090514', accent: '#a855f7' },
    { id: 'cyberpunk', label: 'Cyberpunk', bg: '#050b14', accent: '#06b6d4' },
    { id: 'silk', label: 'Silk White', bg: '#121316', accent: '#f43f5e' },
    { id: 'emerald', label: 'Emerald Forest', bg: '#04120c', accent: '#10b981' },
  ];

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => console.log(e));
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <>
      {/* Floating Gear Settings Toggle Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          onAudioUnlock();
        }}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white border border-white/10 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95"
        title="Settings & Customization"
      >
        <Settings className={`w-6 h-6 ${isOpen ? 'rotate-90' : ''} transition-transform duration-500`} />
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Settings Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-neutral-950/95 text-white border-l border-white/10 shadow-2xl p-6 overflow-y-auto backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold tracking-wide">Spider Clock Settings</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* THEME PRESETS */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">Theme Palette</label>
            <div className="grid grid-cols-2 gap-2.5">
              {themePresets.map((t) => (
                <button
                  key={t.id}
                  onClick={() => updateSettings({ theme: t.id })}
                  className={`flex items-center space-x-2.5 p-2.5 rounded-xl border text-left text-xs font-medium transition-all ${
                    settings.theme === t.id
                      ? 'border-indigo-500 bg-indigo-500/20 text-white shadow-lg'
                      : 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: t.accent }} />
                  <span>{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* VISUAL APPEARANCE */}
          <div className="space-y-4 pt-2 border-t border-white/10">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Visual Customization</h3>

            {/* Web Opacity */}
            <div>
              <div className="flex justify-between text-xs text-gray-300 mb-1.5">
                <span>Web Opacity</span>
                <span>{settings.webOpacity}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={settings.webOpacity}
                onChange={(e) => updateSettings({ webOpacity: Number(e.target.value) })}
                className="w-full accent-indigo-500 h-1.5 bg-white/10 rounded-lg cursor-pointer"
              />
            </div>

            {/* Web Rotation Speed */}
            <div>
              <div className="flex justify-between text-xs text-gray-300 mb-1.5">
                <span>Web Rotation Speed</span>
                <span>{settings.webSpeed}x</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="3"
                step="0.1"
                value={settings.webSpeed}
                onChange={(e) => updateSettings({ webSpeed: Number(e.target.value) })}
                className="w-full accent-indigo-500 h-1.5 bg-white/10 rounded-lg cursor-pointer"
              />
            </div>

            {/* Spider Glow */}
            <div>
              <div className="flex justify-between text-xs text-gray-300 mb-1.5">
                <span>Spider Glow Intensity</span>
                <span>{settings.spiderGlow}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={settings.spiderGlow}
                onChange={(e) => updateSettings({ spiderGlow: Number(e.target.value) })}
                className="w-full accent-indigo-500 h-1.5 bg-white/10 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* DISPLAY TOGGLES */}
          <div className="space-y-3 pt-2 border-t border-white/10">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Clock Elements</h3>

            {[
              { key: 'showNumbers', label: 'Clock Numerals (1-12)' },
              { key: 'showDigitalClock', label: 'Digital Time Overlay' },
              { key: 'showSeconds', label: 'Seconds Leg Pointer' },
              { key: 'showDate', label: 'Date Display' },
              { key: 'reducedMotion', label: 'Reduced Motion' },
            ].map((toggle) => (
              <label
                key={toggle.key}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors"
              >
                <span className="text-xs font-medium text-gray-300">{toggle.label}</span>
                <input
                  type="checkbox"
                  checked={Boolean(settings[toggle.key as keyof ClockSettings])}
                  onChange={(e) =>
                    updateSettings({ [toggle.key]: e.target.checked } as Partial<ClockSettings>)
                  }
                  className="w-4 h-4 accent-indigo-500 rounded cursor-pointer"
                />
              </label>
            ))}
          </div>

          {/* AUDIO CONTROLS */}
          <div className="space-y-3 pt-2 border-t border-white/10">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Audio Effects</h3>
            
            <label className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
              <span className="flex items-center space-x-2 text-xs font-medium text-gray-300">
                {settings.soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-gray-400" />}
                <span>Clock Ticking Sound</span>
              </span>
              <input
                type="checkbox"
                checked={settings.soundEnabled}
                onChange={(e) => {
                  updateSettings({ soundEnabled: e.target.checked });
                  if (e.target.checked) onAudioUnlock();
                }}
                className="w-4 h-4 accent-indigo-500 rounded cursor-pointer"
              />
            </label>

            {settings.soundEnabled && (
              <div>
                <div className="flex justify-between text-xs text-gray-300 mb-1.5">
                  <span>Tick Volume</span>
                  <span>{settings.tickVolume}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={settings.tickVolume}
                  onChange={(e) => updateSettings({ tickVolume: Number(e.target.value) })}
                  className="w-full accent-indigo-500 h-1.5 bg-white/10 rounded-lg cursor-pointer"
                />
              </div>
            )}
          </div>

          {/* ACTIONS */}
          <div className="pt-4 border-t border-white/10 flex space-x-3">
            <button
              onClick={toggleFullscreen}
              className="flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Fullscreen</span>
            </button>
            <button
              onClick={resetSettings}
              className="flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-medium border border-red-500/20 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
