'use client';

import React from 'react';
import {
  calculateAnatomicalPointerLeg,
  calculateNaturalSpiderLeg,
  Point,
} from '@/utils/spiderGeometry';

interface SpiderLegsProps {
  cx: number;
  cy: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  showSeconds: boolean;
  spiderColor: string;
  accentColor: string;
  reducedMotion: boolean;
}

export const SpiderLegs: React.FC<SpiderLegsProps> = ({
  cx,
  cy,
  hours,
  minutes,
  seconds,
  milliseconds,
  showSeconds,
  spiderColor,
  accentColor,
  reducedMotion,
}) => {
  const idlePhase = reducedMotion ? 0 : (Date.now() / 1200) % (Math.PI * 2);

  // Body attachment points for 8 legs (4 on left, 4 on right)
  const leftOrigins: Point[] = [
    { x: cx - 8, y: cy - 16 }, // L1 Top Left (Cephalothorax)
    { x: cx - 11, y: cy - 8 },  // L2 Upper Left
    { x: cx - 10, y: cy + 2 },  // L3 Lower Left
    { x: cx - 7, y: cy + 12 },  // L4 Bottom Left (Abdomen)
  ];

  const rightOrigins: Point[] = [
    { x: cx + 8, y: cy - 16 }, // R1 Top Right (Cephalothorax)
    { x: cx + 11, y: cy - 8 },  // R2 Upper Right
    { x: cx + 10, y: cy + 2 },  // R3 Lower Right
    { x: cx + 7, y: cy + 12 },  // R4 Bottom Right (Abdomen)
  ];

  // Calculated clock hand angles (0 deg = 12 o'clock / straight up)
  const hourAngle = ((hours % 12) + minutes / 60 + seconds / 3600) * 30 - 90;
  const minuteAngle = (minutes + seconds / 60) * 6 - 90;
  const secondAngle = (seconds + milliseconds / 1000) * 6 - 90;

  // Hand pointer lengths
  const hourLength = 190;
  const minuteLength = 260;
  const secondLength = 290;

  // 1. TOP LEGS (L1, R1): Arch UPWARDS framing head & thread (Reference match)
  const legL1 = calculateNaturalSpiderLeg(leftOrigins[0], -125, 45, -145, 90, -1, idlePhase);
  const legR1 = calculateNaturalSpiderLeg(rightOrigins[0], -55, 45, -35, 90, 1, idlePhase);

  // 2. BOTTOM LEGS (L4, R4): Curve DOWNWARDS framing abdomen (Reference match)
  const legL4 = calculateNaturalSpiderLeg(leftOrigins[3], 135, 35, 120, 75, -1, idlePhase + 1.2);
  const legR4 = calculateNaturalSpiderLeg(rightOrigins[3], 45, 35, 60, 75, 1, idlePhase + 1.2);

  // 3. UPPER LEFT LEG (L2): Extends HORIZONTALLY left
  const legL2 = calculateNaturalSpiderLeg(leftOrigins[1], -170, 70, -160, 130, -1, idlePhase + 0.4);

  // 4. UPPER RIGHT LEG (R2 - MINUTE HAND): Knee extends right, Tibia points to Minute angle
  const legR2 = calculateAnatomicalPointerLeg(
    rightOrigins[1],
    -10, // Knee extends right
    85,
    minuteAngle,
    minuteLength,
    1
  );

  // 5. LOWER LEFT LEG (L3 - HOUR HAND): Knee extends down-left, Tibia points to Hour angle
  const legL3 = calculateAnatomicalPointerLeg(
    leftOrigins[2],
    160, // Knee extends down-left
    75,
    hourAngle,
    hourLength,
    -1
  );

  // 6. LOWER RIGHT LEG (R3 - SECOND HAND / NATURAL):
  const legR3Pointer = calculateAnatomicalPointerLeg(
    rightOrigins[2],
    30, // Knee extends down-right
    70,
    secondAngle,
    secondLength,
    1
  );
  const legR3Natural = calculateNaturalSpiderLeg(rightOrigins[2], 25, 60, 35, 115, 1, idlePhase + 0.8);

  return (
    <g className="select-none">
      <defs>
        {/* Glow filter for white reference legs */}
        <filter id="referenceLegGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* NATURAL BODY SILHOUETTE LEGS (L1, R1, L2, L4, R4) */}
      <g stroke={spiderColor} fill="none" strokeLinecap="round" strokeLinejoin="round" filter="url(#referenceLegGlow)">
        {/* L1 & R1 (Top Arching Legs) */}
        <path d={legL1.path} strokeWidth="3.2" strokeOpacity="0.95" />
        <path d={legR1.path} strokeWidth="3.2" strokeOpacity="0.95" />

        {/* L2 (Upper Left Leg) */}
        <path d={legL2.path} strokeWidth="3.5" strokeOpacity="0.95" />

        {/* L4 & R4 (Bottom Framing Legs) */}
        <path d={legL4.path} strokeWidth="3.0" strokeOpacity="0.9" />
        <path d={legR4.path} strokeWidth="3.0" strokeOpacity="0.9" />

        {/* R3 Natural path when seconds hand is hidden */}
        {!showSeconds && (
          <path d={legR3Natural.path} strokeWidth="3.2" strokeOpacity="0.9" />
        )}
      </g>

      {/* HOUR HAND LEG (L3): Thick, jointed white leg with glowing tip */}
      <g filter="url(#referenceLegGlow)">
        {/* Femur */}
        <path d={legL3.femurPath} fill="none" stroke={spiderColor} strokeWidth="4.2" strokeLinecap="round" />
        {/* Tibia Pointer */}
        <path d={legL3.tibiaPath} fill="none" stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round" />
        {/* Knee Joint */}
        <circle cx={legL3.joint.x} cy={legL3.joint.y} r="3.5" fill={accentColor} />
        {/* Hour Tip Indicator */}
        <circle cx={legL3.tip.x} cy={legL3.tip.y} r="4.5" fill={accentColor} />
      </g>

      {/* MINUTE HAND LEG (R2): Long, elegant white leg extending to Minute angle */}
      <g filter="url(#referenceLegGlow)">
        {/* Femur */}
        <path d={legR2.femurPath} fill="none" stroke={spiderColor} strokeWidth="4.0" strokeLinecap="round" />
        {/* Tibia Pointer */}
        <path d={legR2.tibiaPath} fill="none" stroke="#ffffff" strokeWidth="3.0" strokeLinecap="round" />
        {/* Knee Joint */}
        <circle cx={legR2.joint.x} cy={legR2.joint.y} r="3.5" fill="#ffffff" />
        {/* Minute Tip Indicator */}
        <circle cx={legR2.tip.x} cy={legR2.tip.y} r="4.0" fill="#ffffff" />
      </g>

      {/* SECOND HAND LEG (R3 Pointer): Slender leg sweeping smoothly to Second angle */}
      {showSeconds && (
        <g filter="url(#referenceLegGlow)">
          {/* Femur */}
          <path d={legR3Pointer.femurPath} fill="none" stroke={spiderColor} strokeWidth="3.2" strokeLinecap="round" />
          {/* Tibia Pointer */}
          <path d={legR3Pointer.tibiaPath} fill="none" stroke={accentColor} strokeWidth="2.0" strokeLinecap="round" />
          {/* Knee Joint */}
          <circle cx={legR3Pointer.joint.x} cy={legR3Pointer.joint.y} r="2.8" fill={accentColor} />
          {/* Second Tip Indicator */}
          <circle cx={legR3Pointer.tip.x} cy={legR3Pointer.tip.y} r="3.5" fill={accentColor} />
        </g>
      )}
    </g>
  );
};
