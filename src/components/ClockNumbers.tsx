'use client';

import React from 'react';

interface ClockNumbersProps {
  showNumbers: boolean;
  currentHour: number;
  currentMinute: number;
  accentColor: string;
}

export const ClockNumbers: React.FC<ClockNumbersProps> = ({
  showNumbers,
  currentHour,
  currentMinute,
  accentColor,
}) => {
  if (!showNumbers) return null;

  const numbers = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const radius = 290;
  const centerX = 400;
  const centerY = 400;

  const activeHourIndex = currentHour % 12;
  const activeMinuteIndex = Math.floor(currentMinute / 5);

  return (
    <g className="select-none font-serif italic text-3xl">
      {numbers.map((num, i) => {
        const angleDeg = i * 30 - 90;
        const rad = (angleDeg * Math.PI) / 180;
        const x = centerX + radius * Math.cos(rad);
        const y = centerY + radius * Math.sin(rad);

        const isHourTarget = num === (activeHourIndex === 0 ? 12 : activeHourIndex);
        const isMinuteTarget = num === (activeMinuteIndex === 0 ? 12 : activeMinuteIndex);
        const isActive = isHourTarget || isMinuteTarget;

        return (
          <g key={`reference-num-${num}`} className="transition-all duration-300">
            {isActive && (
              <circle
                cx={x}
                cy={y}
                r={26}
                fill={accentColor}
                fillOpacity={isHourTarget ? 0.2 : 0.12}
                filter="blur(5px)"
              />
            )}
            <text
              x={x}
              y={y + 10}
              textAnchor="middle"
              fill={isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.3)'}
              fontSize={isActive ? '36' : '30'}
              fontWeight={isActive ? 'bold' : 'normal'}
              style={{
                textShadow: isActive ? `0 0 10px ${accentColor}` : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              {num}
            </text>
          </g>
        );
      })}
    </g>
  );
};
