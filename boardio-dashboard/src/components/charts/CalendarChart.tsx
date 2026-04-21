"use client";

import { ResponsiveCalendar } from "@nivo/calendar";
import { boardioTheme } from "@/lib/chartTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CalendarChart({ data }: { data: any[] }) {
  return (
    <ResponsiveCalendar
      data={data}
      from="2025-01-01"
      to="2025-12-31"
      emptyColor="#f5f4f2"
      colors={["#f5e6d3", "#e8c9a0", "#c9a87c", "#b08d5f", "#8b6914"]}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      theme={boardioTheme}
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
        },
      ]}
    />
  );
}
