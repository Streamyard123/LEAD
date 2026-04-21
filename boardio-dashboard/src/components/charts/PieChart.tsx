"use client";

import { ResponsivePie } from "@nivo/pie";
import { boardioTheme, chartColors } from "@/lib/chartTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PieChart({ data }: { data: any[] }) {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 20, right: 80, bottom: 40, left: 80 }}
      innerRadius={0.55}
      padAngle={1.5}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={chartColors}
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
      enableArcLinkLabels={true}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#78716c"
      arcLinkLabelsThickness={1}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={true}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          translateY: 36,
          itemsSpacing: 0,
          itemWidth: 85,
          itemHeight: 18,
          symbolSize: 8,
          symbolShape: "circle",
        },
      ]}
    />
  );
}
