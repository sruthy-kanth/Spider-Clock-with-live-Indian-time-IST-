'use client';

import React from 'react';
import { generateWebWheelPath } from '@/utils/spiderGeometry';

interface WebBackgroundProps {
  opacity: number;
  speed: number;
  accentColor: string;
  reducedMotion: boolean;
}

export const WebBackground: React.FC<WebBackgroundProps> = ({
  opacity,
  speed,
  accentColor,
  reducedMotion,
}) => {
  // Delicate small web gear mandalas clustered behind spider body (matching reference image)
  const topCenterWeb = generateWebWheelPath(400, 310, 65, 12, 4);
  const topLeftWeb = generateWebWheelPath(330, 360, 70, 12, 4);
  const topRightWeb = generateWebWheelPath(470, 360, 75, 12, 4);
  const bottomCenterWeb = generateWebWheelPath(400, 490, 70, 12, 4);
  const bottomLeftWeb = generateWebWheelPath(335, 450, 55, 10, 3);
  const centerBehindWeb = generateWebWheelPath(400, 400, 45, 10, 3);

  const durationSlow = reducedMotion ? 0 : 70 / Math.max(speed, 0.1);
  const durationFast = reducedMotion ? 0 : 45 / Math.max(speed, 0.1);

  return (
    <g
      className="transition-opacity duration-700 pointer-events-none"
      style={{ opacity: opacity / 100 }}
    >
      <defs>
        <filter id="delicateWebGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <g filter="url(#delicateWebGlow)" stroke={accentColor} fill="none" strokeWidth="0.6">
        {/* 1. Top Center Web Gear */}
        <g
          style={{
            transformOrigin: '400px 310px',
            animationDuration: `${durationSlow}s`,
          }}
          className={!reducedMotion ? 'animate-spin-slow' : ''}
        >
          {topCenterWeb.spokes.map((path, i) => (
            <path key={`tc-s-${i}`} d={path} strokeOpacity="0.25" />
          ))}
          {topCenterWeb.rings.map((path, i) => (
            <path key={`tc-r-${i}`} d={path} strokeOpacity={0.2 + i * 0.05} />
          ))}
        </g>

        {/* 2. Top-Left Web Gear */}
        <g
          style={{
            transformOrigin: '330px 360px',
            animationDuration: `${durationFast}s`,
            animationDirection: 'reverse',
          }}
          className={!reducedMotion ? 'animate-spin-slow' : ''}
        >
          {topLeftWeb.spokes.map((path, i) => (
            <path key={`tl-s-${i}`} d={path} strokeOpacity="0.25" />
          ))}
          {topLeftWeb.rings.map((path, i) => (
            <path key={`tl-r-${i}`} d={path} strokeOpacity={0.2 + i * 0.05} />
          ))}
        </g>

        {/* 3. Top-Right Web Gear */}
        <g
          style={{
            transformOrigin: '470px 360px',
            animationDuration: `${durationSlow * 1.1}s`,
          }}
          className={!reducedMotion ? 'animate-spin-slow' : ''}
        >
          {topRightWeb.spokes.map((path, i) => (
            <path key={`tr-s-${i}`} d={path} strokeOpacity="0.25" />
          ))}
          {topRightWeb.rings.map((path, i) => (
            <path key={`tr-r-${i}`} d={path} strokeOpacity={0.2 + i * 0.05} />
          ))}
        </g>

        {/* 4. Bottom-Center Web Gear */}
        <g
          style={{
            transformOrigin: '400px 490px',
            animationDuration: `${durationFast * 1.2}s`,
            animationDirection: 'reverse',
          }}
          className={!reducedMotion ? 'animate-spin-slow' : ''}
        >
          {bottomCenterWeb.spokes.map((path, i) => (
            <path key={`bc-s-${i}`} d={path} strokeOpacity="0.25" />
          ))}
          {bottomCenterWeb.rings.map((path, i) => (
            <path key={`bc-r-${i}`} d={path} strokeOpacity={0.2 + i * 0.05} />
          ))}
        </g>

        {/* 5. Bottom-Left Web Gear */}
        <g
          style={{
            transformOrigin: '335px 450px',
            animationDuration: `${durationSlow * 0.9}s`,
          }}
          className={!reducedMotion ? 'animate-spin-slow' : ''}
        >
          {bottomLeftWeb.spokes.map((path, i) => (
            <path key={`bl-s-${i}`} d={path} strokeOpacity="0.2" />
          ))}
          {bottomLeftWeb.rings.map((path, i) => (
            <path key={`bl-r-${i}`} d={path} strokeOpacity={0.15 + i * 0.05} />
          ))}
        </g>

        {/* 6. Center-Behind Web Gear */}
        <g
          style={{
            transformOrigin: '400px 400px',
            animationDuration: `${durationFast * 1.3}s`,
            animationDirection: 'reverse',
          }}
          className={!reducedMotion ? 'animate-spin-slow' : ''}
        >
          {centerBehindWeb.spokes.map((path, i) => (
            <path key={`cb-s-${i}`} d={path} strokeOpacity="0.3" />
          ))}
          {centerBehindWeb.rings.map((path, i) => (
            <path key={`cb-r-${i}`} d={path} strokeOpacity={0.2 + i * 0.06} />
          ))}
        </g>
      </g>
    </g>
  );
};
