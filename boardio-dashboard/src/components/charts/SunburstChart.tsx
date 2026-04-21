"use client";

import { ResponsiveSunburst } from "@nivo/sunburst";
import { boardioTheme } from "@/lib/chartTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SunburstChart({ data }: { data: any }) {
  return (
    <ResponsiveSunburst
      data={data}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      id="name"
      value="value"
      cornerRadius={3}
      borderWidth={2}
      borderColor="#ffffff"
      colors={{ scheme: "oranges" }}
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
      childColor={{ from: "color", modifiers: [["brighter", 0.3]] }}
      enableArcLabels={true}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
    />
  );
}
