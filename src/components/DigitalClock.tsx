'use client';

import React from 'react';
import { TimeState } from '@/types/clock';

interface DigitalClockProps {
  timeState: TimeState;
  showDigitalClock: boolean;
  showDate: boolean;
  accentColor: string;
}

export const DigitalClock: React.FC<DigitalClockProps> = ({
  timeState,
  showDigitalClock,
  showDate,
  accentColor,
}) => {
  if (!showDigitalClock && !showDate) return null;

  return (
    <div className="flex flex-col items-center justify-center space-y-1 z-10 pointer-events-none">
      {/* Time Display */}
      {showDigitalClock && (
        <div
          className="text-2xl sm:text-3xl font-mono tracking-widest font-bold px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300"
          style={{
            color: '#ffffff',
            textShadow: `0 0 10px ${accentColor}`,
          }}
        >
          {timeState.timeString}
        </div>
      )}

      {/* Date & Sync Badge */}
      <div className="flex items-center space-x-3 text-xs sm:text-sm text-gray-300/80 font-medium">
        {showDate && (
          <span className="px-3 py-0.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            {timeState.dateString}
          </span>
        )}

        <span className="flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>IST (Asia/Kolkata)</span>
        </span>
      </div>
    </div>
  );
};
