"use client";

import { useState, useEffect } from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { boardioTheme } from "@/lib/chartTheme";

interface ChoroplethData {
  id: string;
  value: number;
}

interface ChoroplethChartProps {
  data: ChoroplethData[];
  maxValue?: number;
  label?: string;
}

export default function ChoroplethChart({ data, maxValue = 100000, label = "Users" }: ChoroplethChartProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [features, setFeatures] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/world_countries.json")
      .then((res) => res.json())
      .then((geoData) => {
        setFeatures(geoData.features);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center text-muted text-sm">
        Loading map data...
      </div>
    );
  }

  if (!features.length) {
    return (
      <div className="w-full h-full flex items-center justify-center text-muted text-sm">
        Failed to load map data
      </div>
    );
  }

  return (
    <ResponsiveChoropleth
      data={data}
      features={features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="oranges"
      domain={[0, maxValue]}
      unknownColor="#f5f4f2"
      label="properties.name"
      valueFormat=".2s"
      projectionType="naturalEarth1"
      projectionScale={140}
      projectionTranslation={[0.5, 0.55]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      graticuleLineColor="#e7e5e4"
      borderWidth={0.5}
      borderColor="#d6d3d1"
      theme={boardioTheme}
      legends={[
        {
          anchor: "bottom-left",
          direction: "column",
          translateX: 20,
          translateY: -20,
          itemWidth: 94,
          itemHeight: 18,
          itemsSpacing: 4,
          symbolSize: 18,
          itemDirection: "left-to-right",
          itemTextColor: "#78716c",
          data: [
            { id: "0", label: `0 ${label}`, color: "#fff7ec" },
            { id: "1", label: `${(maxValue * 0.25).toLocaleString()} ${label}`, color: "#fdbe85" },
            { id: "2", label: `${(maxValue * 0.5).toLocaleString()} ${label}`, color: "#fd8d3c" },
            { id: "3", label: `${(maxValue * 0.75).toLocaleString()} ${label}`, color: "#e6550d" },
            { id: "4", label: `${maxValue.toLocaleString()}+ ${label}`, color: "#a63603" },
          ],
        },
      ]}
    />
  );
}
