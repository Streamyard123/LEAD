"use client";

import { ResponsiveWaffle } from "@nivo/waffle";
import { boardioTheme, chartColors } from "@/lib/chartTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function WaffleChart({ data }: { data: any[] }) {
  return (
    <ResponsiveWaffle
      data={data}
      total={100}
      rows={10}
      columns={10}
      margin={{ top: 10, right: 10, bottom: 40, left: 10 }}
      colors={chartColors}
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
      borderRadius={2}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.3]] }}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          translateY: 36,
          itemsSpacing: 4,
          itemWidth: 100,
          itemHeight: 20,
          symbolSize: 8,
          symbolShape: "circle",
        },
      ]}
    />
  );
}
