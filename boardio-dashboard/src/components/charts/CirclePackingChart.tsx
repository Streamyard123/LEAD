"use client";

import { ResponsiveCirclePacking } from "@nivo/circle-packing";
import { boardioTheme } from "@/lib/chartTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CirclePackingChart({ data }: { data: any }) {
  return (
    <ResponsiveCirclePacking
      data={data}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      id="name"
      value="value"
      colors={{ scheme: "oranges" }}
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
      childColor={{ from: "color", modifiers: [["brighter", 0.4]] }}
      padding={4}
      enableLabels={true}
      labelsSkipRadius={10}
      labelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.3]] }}
    />
  );
}
