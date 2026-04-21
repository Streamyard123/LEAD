"use client";

import { ResponsiveParallelCoordinates } from "@nivo/parallel-coordinates";
import { boardioTheme, chartColors } from "@/lib/chartTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ParallelCoordinatesChart({ data }: { data: any[] }) {
  return (
    <ResponsiveParallelCoordinates
      data={data}
      variables={[
        { id: "reach", value: "reach", min: 0, max: 120000, legendOffset: -12, ticksPosition: "before" },
        { id: "engagement", value: "engagement", min: 0, max: 6000, legendOffset: -12, ticksPosition: "before" },
        { id: "conversion", value: "conversion", min: 0, max: 600, legendOffset: -12, ticksPosition: "before" },
        { id: "cost", value: "cost", min: 0, max: 4000, legendOffset: -12, ticksPosition: "before" },
        { id: "roi", value: "roi", min: 0, max: 800, legendOffset: -12, ticksPosition: "before" },
      ]}
      margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
      colors={chartColors}
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
      lineOpacity={0.5}
      strokeWidth={2}
    />
  );
}
