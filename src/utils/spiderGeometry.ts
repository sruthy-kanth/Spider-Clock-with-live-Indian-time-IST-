export interface Point {
  x: number;
  y: number;
}

export interface LegPathData {
  path: string;
  femurPath: string;
  tibiaPath: string;
  joint: Point;
  tip: Point;
}

/**
 * Calculates dynamic time-pointer spider leg (preserves anatomical knee bend, extends tibia tip to target time angle)
 */
export function calculateAnatomicalPointerLeg(
  origin: Point,
  baseKneeAngleDeg: number,
  kneeDistance: number,
  targetAngleDeg: number,
  pointerLength: number,
  kneeBendSide: 1 | -1 = 1
): LegPathData {
  const kneeRad = (baseKneeAngleDeg * Math.PI) / 180;
  
  // Fixed anatomical knee joint location
  const joint: Point = {
    x: origin.x + kneeDistance * Math.cos(kneeRad),
    y: origin.y + kneeDistance * Math.sin(kneeRad),
  };

  // Target tip on clock face
  const targetRad = (targetAngleDeg * Math.PI) / 180;
  const tip: Point = {
    x: origin.x + pointerLength * Math.cos(targetRad),
    y: origin.y + pointerLength * Math.sin(targetRad),
  };

  // Curved femur from origin to knee joint
  const midX = (origin.x + joint.x) / 2;
  const midY = (origin.y + joint.y) / 2;
  const ctrlX = midX - kneeBendSide * 15;
  const ctrlY = midY - 20;

  const femurPath = `M ${origin.x} ${origin.y} Q ${ctrlX} ${ctrlY} ${joint.x} ${joint.y}`;
  const tibiaPath = `M ${joint.x} ${joint.y} L ${tip.x} ${tip.y}`;
  const path = `${femurPath} L ${tip.x} ${tip.y}`;

  return { path, femurPath, tibiaPath, joint, tip };
}

/**
 * Calculates natural fixed spider leg (for legs that frame the body silhouette)
 */
export function calculateNaturalSpiderLeg(
  origin: Point,
  kneeAngleDeg: number,
  kneeDist: number,
  tipAngleDeg: number,
  tipDist: number,
  kneeBendSide: 1 | -1 = 1,
  idlePhase: number = 0
): LegPathData {
  const breathing = Math.sin(idlePhase) * 3;

  const kneeRad = (kneeAngleDeg * Math.PI) / 180;
  const joint: Point = {
    x: origin.x + kneeDist * Math.cos(kneeRad),
    y: origin.y + kneeDist * Math.sin(kneeRad) + breathing * 0.5,
  };

  const tipRad = (tipAngleDeg * Math.PI) / 180;
  const tip: Point = {
    x: origin.x + tipDist * Math.cos(tipRad),
    y: origin.y + tipDist * Math.sin(tipRad) + breathing,
  };

  const ctrlX = origin.x + (joint.x - origin.x) * 0.5 - kneeBendSide * 10;
  const ctrlY = origin.y + (joint.y - origin.y) * 0.5 - 15;

  const femurPath = `M ${origin.x} ${origin.y} Q ${ctrlX} ${ctrlY} ${joint.x} ${joint.y}`;
  
  // Curved tibia extending from knee to tip
  const tibiaCtrlX = joint.x + (tip.x - joint.x) * 0.5 + kneeBendSide * 12;
  const tibiaCtrlY = joint.y + (tip.y - joint.y) * 0.5 + 10;
  const tibiaPath = `M ${joint.x} ${joint.y} Q ${tibiaCtrlX} ${tibiaCtrlY} ${tip.x} ${tip.y}`;

  const path = `M ${origin.x} ${origin.y} Q ${ctrlX} ${ctrlY} ${joint.x} ${joint.y} Q ${tibiaCtrlX} ${tibiaCtrlY} ${tip.x} ${tip.y}`;

  return { path, femurPath, tibiaPath, joint, tip };
}

/**
 * Generates small delicate web gear path
 */
export function generateWebWheelPath(
  centerX: number,
  centerY: number,
  radius: number,
  spokesCount: number = 12,
  ringsCount: number = 4
): { spokes: string[]; rings: string[] } {
  const spokes: string[] = [];
  const rings: string[] = [];

  for (let i = 0; i < spokesCount; i++) {
    const angle = (i * 2 * Math.PI) / spokesCount;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    spokes.push(`M ${centerX} ${centerY} L ${x} ${y}`);
  }

  for (let r = 1; r <= ringsCount; r++) {
    const ringRadius = (radius / ringsCount) * r;
    let ringPath = '';

    for (let i = 0; i <= spokesCount; i++) {
      const angle = ((i % spokesCount) * 2 * Math.PI) / spokesCount;
      const nextAngle = (((i + 1) % spokesCount) * 2 * Math.PI) / spokesCount;
      
      const x1 = centerX + ringRadius * Math.cos(angle);
      const y1 = centerY + ringRadius * Math.sin(angle);
      
      const x2 = centerX + ringRadius * Math.cos(nextAngle);
      const y2 = centerY + ringRadius * Math.sin(nextAngle);

      const midAngle = (angle + nextAngle) / 2;
      const sagRadius = ringRadius * 0.86;
      const ctrlX = centerX + sagRadius * Math.cos(midAngle);
      const ctrlY = centerY + sagRadius * Math.sin(midAngle);

      if (i === 0) {
        ringPath += `M ${x1} ${y1} Q ${ctrlX} ${ctrlY} ${x2} ${y2}`;
      } else {
        ringPath += ` Q ${ctrlX} ${ctrlY} ${x2} ${y2}`;
      }
    }
    rings.push(ringPath);
  }

  return { spokes, rings };
}
