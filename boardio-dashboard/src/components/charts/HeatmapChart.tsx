"use client";

import { ResponsiveHeatMap } from "@nivo/heatmap";
import { boardioTheme } from "@/lib/chartTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HeatmapChart({ data }: { data: any[] }) {
  return (
    <ResponsiveHeatMap
      data={data}
      margin={{ top: 30, right: 30, bottom: 30, left: 50 }}
      valueFormat=">-.0s"
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
      colors={{
        type: "sequential",
        scheme: "oranges",
      }}
      emptyColor="#f5f4f2"
      borderRadius={2}
      borderWidth={2}
      borderColor="#ffffff"
      enableLabels={true}
      labelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      axisTop={{
        tickSize: 0,
        tickPadding: 5,
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 5,
      }}
    />
  );
}
