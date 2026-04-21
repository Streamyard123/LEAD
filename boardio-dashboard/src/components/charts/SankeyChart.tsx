"use client";

import { ResponsiveSankey } from "@nivo/sankey";
import { boardioTheme, chartColors } from "@/lib/chartTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SankeyChart({ data }: { data: any }) {
  return (
    <ResponsiveSankey
      data={data}
      margin={{ top: 20, right: 160, bottom: 20, left: 50 }}
      align="justify"
      colors={chartColors}
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
      nodeOpacity={1}
      nodeHoverOthersOpacity={0.35}
      nodeThickness={18}
      nodeSpacing={24}
      nodeBorderWidth={0}
      nodeBorderRadius={3}
      linkOpacity={0.4}
      linkHoverOthersOpacity={0.1}
      linkContract={3}
      enableLinkGradient={true}
      labelPosition="outside"
      labelOrientation="horizontal"
      labelPadding={16}
      labelTextColor={{ from: "color", modifiers: [["darker", 1]] }}
    />
  );
}
