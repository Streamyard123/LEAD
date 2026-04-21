"use client";

import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import { boardioTheme, chartColors } from "@/lib/chartTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ScatterChart({ data }: { data: any[] }) {
  return (
    <ResponsiveScatterPlot
      data={data}
      margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
      xScale={{ type: "linear", min: "auto", max: "auto" }}
      yScale={{ type: "linear", min: "auto", max: "auto" }}
      colors={chartColors}
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
      blendMode="multiply"
      nodeSize={10}
      useMesh={true}
      axisTop={null}
      axisRight={null}
      axisBottom={{ tickSize: 0, tickPadding: 8, legend: "Spend ($)", legendOffset: 40, legendPosition: "middle" }}
      axisLeft={{ tickSize: 0, tickPadding: 8, legend: "Conversions", legendOffset: -50, legendPosition: "middle" }}
      legends={[
        { anchor: "bottom", direction: "row", translateY: 48, itemWidth: 100, itemHeight: 20, symbolSize: 8, symbolShape: "circle" },
      ]}
    />
  );
}
