"use client";

import { ResponsiveBump } from "@nivo/bump";
import { boardioTheme, chartColors } from "@/lib/chartTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BumpChart({ data }: { data: any[] }) {
  return (
    <ResponsiveBump
      data={data}
      margin={{ top: 20, right: 100, bottom: 40, left: 60 }}
      colors={chartColors}
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
      lineWidth={3}
      activeLineWidth={5}
      inactiveLineWidth={2}
      inactiveOpacity={0.15}
      pointSize={8}
      activePointSize={14}
      inactivePointSize={0}
      pointColor={{ theme: "background" }}
      pointBorderWidth={3}
      activePointBorderWidth={3}
      pointBorderColor={{ from: "serie.color" }}
      axisTop={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 8,
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 8,
      }}
    />
  );
}
