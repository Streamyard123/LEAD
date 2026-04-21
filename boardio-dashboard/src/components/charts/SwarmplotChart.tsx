"use client";

import { ResponsiveSwarmPlot } from "@nivo/swarmplot";
import { boardioTheme, chartColors } from "@/lib/chartTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SwarmplotChart({ data }: { data: any[] }) {
  return (
    <ResponsiveSwarmPlot
      data={data}
      groups={["Q1", "Q2", "Q3", "Q4"]}
      id="id"
      value="value"
      valueScale={{ type: "linear", min: 0, max: 250, reverse: false }}
      size={8}
      forceStrength={4}
      simulationIterations={100}
      margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
      colors={chartColors}
      theme={boardioTheme}
      animate={true}
      motionConfig="gentle"
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{ tickSize: 0, tickPadding: 8 }}
      axisLeft={{ tickSize: 0, tickPadding: 8, legend: "Value", legendOffset: -50, legendPosition: "middle" }}
    />
  );
}
