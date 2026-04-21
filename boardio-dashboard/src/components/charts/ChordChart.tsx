"use client";

import { ResponsiveChord } from "@nivo/chord";
import { boardioTheme, chartColors } from "@/lib/chartTheme";

export default function ChordChart({ matrix, keys }: { matrix: number[][]; keys: string[] }) {
  return (
    <ResponsiveChord
      data={matrix}
      keys={keys}
      margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
      padAngle={0.02}
      innerRadiusRatio={0.96}
      innerRadiusOffset={0.02}
      colors={chartColors}
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
      arcOpacity={1}
      arcBorderWidth={1}
      arcBorderColor={{ from: "color", modifiers: [["darker", 0.4]] }}
      ribbonOpacity={0.5}
      ribbonBorderWidth={1}
      ribbonBorderColor={{ from: "color", modifiers: [["darker", 0.4]] }}
      enableLabel={true}
      label="id"
      labelOffset={12}
      labelRotation={-90}
      labelTextColor={{ from: "color", modifiers: [["darker", 1]] }}
      isInteractive={true}
    />
  );
}
