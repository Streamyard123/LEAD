"use client";

import { ResponsiveStream } from "@nivo/stream";
import { boardioTheme, chartColors } from "@/lib/chartTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function StreamChart({ data, keys }: { data: any[]; keys: string[] }) {
  return (
    <ResponsiveStream
      data={data}
      keys={keys}
      margin={{ top: 20, right: 110, bottom: 40, left: 60 }}
      offsetType="silhouette"
      colors={chartColors}
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
      fillOpacity={0.85}
      borderWidth={0}
      enableGridX={true}
      enableGridY={false}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 8,
        format: (v) => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][v as number] || "",
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 8,
      }}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          translateX: 100,
          itemWidth: 80,
          itemHeight: 20,
          symbolSize: 8,
          symbolShape: "circle",
        },
      ]}
    />
  );
}
