"use client";

import { useState, useEffect } from "react";
import { ResponsiveGeoMap } from "@nivo/geo";
import { boardioTheme } from "@/lib/chartTheme";

export default function GeoMapChart() {
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
        Loading map...
      </div>
    );
  }

  if (!features.length) {
    return (
      <div className="w-full h-full flex items-center justify-center text-muted text-sm">
        Failed to load map
      </div>
    );
  }

  return (
    <ResponsiveGeoMap
      features={features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      projectionType="naturalEarth1"
      projectionScale={140}
      projectionTranslation={[0.5, 0.55]}
      projectionRotation={[0, 0, 0]}
      fillColor="#e8c9a0"
      borderWidth={0.5}
      borderColor="#c9a87c"
      enableGraticule={true}
      graticuleLineColor="#f5f4f2"
      theme={boardioTheme}
    />
  );
}
