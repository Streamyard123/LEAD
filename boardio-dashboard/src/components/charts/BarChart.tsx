"use client";

import { ResponsiveBar } from "@nivo/bar";
import { boardioTheme, chartColors } from "@/lib/chartTheme";

interface BarChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  keys: string[];
  indexBy: string;
  grouped?: boolean;
}

export default function BarChart({ data, keys, indexBy, grouped = false }: BarChartProps) {
  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy={indexBy}
      margin={{ top: 10, right: 20, bottom: 50, left: 60 }}
      padding={0.3}
      groupMode={grouped ? "grouped" : "stacked"}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={chartColors}
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
      borderRadius={2}
      enableLabel={true}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 8,
        tickRotation: 0,
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 8,
        tickRotation: 0,
        format: (v) => (typeof v === "number" && v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v),
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom",
          direction: "row",
          translateY: 48,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          symbolSize: 8,
          symbolShape: "circle",
        },
      ]}
      role="img"
      ariaLabel="Bar chart"
    />
  );
}
