"use client";

import { ResponsiveMarimekko } from "@nivo/marimekko";
import { boardioTheme, chartColors } from "@/lib/chartTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MarimekkoChart({ data }: { data: any[] }) {
  return (
    <ResponsiveMarimekko
      data={data}
      id="statement"
      value="agree"
      dimensions={[
        { id: "agree", value: "agree" },
        { id: "disagree", value: "disagree" },
        { id: "neutral", value: "neutral" },
      ]}
      margin={{ top: 20, right: 80, bottom: 40, left: 80 }}
      colors={chartColors}
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
      innerPadding={4}
      axisTop={null}
      axisRight={null}
      axisBottom={{ tickSize: 0, tickPadding: 8 }}
      axisLeft={{ tickSize: 0, tickPadding: 8 }}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          translateX: 80,
          itemWidth: 70,
          itemHeight: 20,
          symbolSize: 8,
          symbolShape: "circle",
        },
      ]}
    />
  );
}
