"use client";

import { ResponsiveLine } from "@nivo/line";
import { boardioTheme, chartColors } from "@/lib/chartTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function LineChart({ data }: { data: any[] }) {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 10, right: 20, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{ type: "linear", min: "auto", max: "auto", stacked: false }}
      curve="catmullRom"
      colors={chartColors}
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
      enableCrosshair={true}
      crosshairType="cross"
      enablePoints={true}
      pointSize={6}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      enableArea={false}
      enableSlices="x"
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
        format: (v) => (typeof v === "number" && v >= 1000 ? `${(v / 1000).toFixed(0)}k` : `${v}`),
      }}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          translateY: 48,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          symbolSize: 8,
          symbolShape: "circle",
        },
      ]}
    />
  );
}
