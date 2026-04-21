"use client";

import { ResponsiveRadar } from "@nivo/radar";
import { boardioTheme, chartColors } from "@/lib/chartTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RadarChart({ data, keys, indexBy }: { data: any[]; keys: string[]; indexBy: string }) {
  return (
    <ResponsiveRadar
      data={data}
      keys={keys}
      indexBy={indexBy}
      maxValue="auto"
      margin={{ top: 40, right: 60, bottom: 40, left: 60 }}
      curve="linearClosed"
      borderWidth={2}
      borderColor={{ from: "color" }}
      gridLevels={5}
      gridShape="circular"
      gridLabelOffset={16}
      enableDots={true}
      dotSize={8}
      dotColor={{ theme: "background" }}
      dotBorderWidth={2}
      dotBorderColor={{ from: "color" }}
      colors={chartColors}
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
      fillOpacity={0.15}
      blendMode="multiply"
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: -50,
          translateY: -30,
          itemWidth: 80,
          itemHeight: 20,
          symbolSize: 8,
          symbolShape: "circle",
        },
      ]}
    />
  );
}
