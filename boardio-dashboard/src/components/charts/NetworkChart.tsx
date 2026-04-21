"use client";

import { ResponsiveNetwork } from "@nivo/network";
import { boardioTheme } from "@/lib/chartTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function NetworkChart({ data }: { data: any }) {
  return (
    <ResponsiveNetwork
      data={data}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      linkDistance={(e: any) => e.distance} // eslint-disable-line @typescript-eslint/no-explicit-any
      centeringStrength={0.3}
      repulsivity={6}
      iterations={60}
      nodeSize={(n: any) => n.radius} // eslint-disable-line @typescript-eslint/no-explicit-any
      activeNodeSize={(n: any) => n.radius * 1.5} // eslint-disable-line @typescript-eslint/no-explicit-any
      nodeColor={(e: any) => e.color} // eslint-disable-line @typescript-eslint/no-explicit-any
      nodeBorderWidth={1}
      nodeBorderColor={{ from: "color", modifiers: [["darker", 0.4]] }}
      linkThickness={2}
      linkBlendMode="multiply"
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
    />
  );
}
