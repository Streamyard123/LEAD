"use client";

import { ResponsiveAreaBump } from "@nivo/bump";
import { boardioTheme, chartColors } from "@/lib/chartTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AreaBumpChart({ data }: { data: any[] }) {
  return (
    <ResponsiveAreaBump
      data={data}
      margin={{ top: 20, right: 100, bottom: 40, left: 60 }}
      spacing={8}
      colors={chartColors}
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
      blendMode="multiply"
      startLabel={true}
      endLabel={true}
      inactiveFillOpacity={0.15}
      axisTop={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 8,
      }}
    />
  );
}
