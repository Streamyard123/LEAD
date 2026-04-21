"use client";

import { ResponsiveFunnel } from "@nivo/funnel";
import { boardioTheme, chartColors } from "@/lib/chartTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FunnelChart({ data }: { data: any[] }) {
  return (
    <ResponsiveFunnel
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      colors={chartColors}
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
      borderWidth={0}
      labelColor={{ from: "color", modifiers: [["darker", 3]] }}
      beforeSeparatorLength={20}
      beforeSeparatorOffset={10}
      afterSeparatorLength={20}
      afterSeparatorOffset={10}
      currentPartSizeExtension={10}
      currentBorderWidth={20}
      shapeBlending={0.7}
    />
  );
}
