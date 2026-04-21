"use client";

import { ResponsiveTreeMap } from "@nivo/treemap";
import { boardioTheme } from "@/lib/chartTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TreemapChart({ data }: { data: any }) {
  return (
    <ResponsiveTreeMap
      data={data}
      identity="name"
      value="value"
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      colors={{ scheme: "oranges" }}
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
      labelSkipSize={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      parentLabelPosition="left"
      parentLabelTextColor={{ from: "color", modifiers: [["darker", 3]] }}
      borderColor={{ from: "color", modifiers: [["darker", 0.3]] }}
      borderWidth={2}
      nodeOpacity={1}
      innerPadding={3}
      outerPadding={3}
    />
  );
}
