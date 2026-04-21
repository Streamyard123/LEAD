"use client";

import { ResponsiveRadialBar } from "@nivo/radial-bar";
import { boardioTheme, chartColors } from "@/lib/chartTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RadialBarChart({ data }: { data: any[] }) {
  return (
    <ResponsiveRadialBar
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      padding={0.4}
      cornerRadius={4}
      colors={chartColors}
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
      enableRadialGrid={true}
      enableCircularGrid={true}
      radialAxisStart={{ tickSize: 0, tickPadding: 5 }}
      circularAxisOuter={{ tickSize: 0, tickPadding: 12 }}
      enableLabels={true}
      labelsSkipAngle={10}
      labelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
    />
  );
}
