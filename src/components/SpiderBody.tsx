'use client';

import React from 'react';

interface SpiderBodyProps {
  cx: number;
  cy: number;
  spiderColor: string;
  accentColor: string;
  glowIntensity: number;
  reducedMotion: boolean;
}

export const SpiderBody: React.FC<SpiderBodyProps> = ({
  cx,
  cy,
  spiderColor,
  accentColor,
  glowIntensity,
  reducedMotion,
}) => {
  const glowBlur = (glowIntensity / 100) * 10;

  return (
    <g className="select-none">
      <defs>
        {/* Soft body glow filter */}
        <filter id="referenceSpiderGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation={glowBlur} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Glossy 3D pearl gradient matching reference image */}
        <linearGradient id="pearlBodyGradient" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#f8fafc" />
          <stop offset="85%" stopColor={spiderColor} />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        <radialGradient id="pearlAbdomenHighlight" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="50%" stopColor="#f1f5f9" stopOpacity="0.9" />
          <stop offset="85%" stopColor={spiderColor} stopOpacity="0.85" />
          <stop offset="100%" stopColor="#090d16" stopOpacity="1" />
        </radialGradient>
      </defs>

      {/* Vertical Silk Thread extending to top of canvas */}
      <line
        x1={cx}
        y1={0}
        x2={cx}
        y2={cy - 20}
        stroke="#ffffff"
        strokeOpacity="0.75"
        strokeWidth="1.2"
        className={!reducedMotion ? 'animate-pulse' : ''}
      />

      {/* Subtle background glow aura */}
      <ellipse
        cx={cx}
        cy={cy}
        rx={30}
        ry={40}
        fill={accentColor}
        fillOpacity={(glowIntensity / 100) * 0.35}
        filter="blur(14px)"
      />

      <g filter="url(#referenceSpiderGlow)">
        {/* Front Chelicerae / Pedipalps */}
        <path
          d={`M ${cx - 3} ${cy - 22} Q ${cx - 6} ${cy - 29} ${cx - 8} ${cy - 25}`}
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d={`M ${cx + 3} ${cy - 22} Q ${cx + 6} ${cy - 29} ${cx + 8} ${cy - 25}`}
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Cephalothorax (Head) */}
        <ellipse
          cx={cx}
          cy={cy - 12}
          rx={11}
          ry={10}
          fill="url(#pearlBodyGradient)"
          stroke="#ffffff"
          strokeWidth="0.8"
        />

        {/* Waist / Pedicel */}
        <path
          d={`M ${cx - 4} ${cy - 2} L ${cx + 4} ${cy - 2} L ${cx + 3} ${cy + 3} L ${cx - 3} ${cy + 3} Z`}
          fill="#1e293b"
        />

        {/* Abdomen (Smooth Pearl Drop / Egg Shape matching reference image) */}
        <path
          d={`M ${cx} ${cy - 1} 
             C ${cx + 18} ${cy + 3}, ${cx + 22} ${cy + 26}, ${cx} ${cy + 38} 
             C ${cx - 22} ${cy + 26}, ${cx - 18} ${cy + 3}, ${cx} ${cy - 1} Z`}
          fill="url(#pearlAbdomenHighlight)"
          stroke="#ffffff"
          strokeWidth="0.8"
        />

        {/* Elegant central spine highlight */}
        <ellipse
          cx={cx}
          cy={cy + 16}
          rx={4}
          ry={12}
          fill="#ffffff"
          fillOpacity="0.4"
        />
      </g>
    </g>
  );
};
