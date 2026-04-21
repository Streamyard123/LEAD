"use client";

import DashboardShell from "@/components/DashboardShell";
import Header from "@/components/Header";
import KPICard from "@/components/KPICard";
import ChartCard from "@/components/ChartCard";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";
import PieChart from "@/components/charts/PieChart";
import RadarChart from "@/components/charts/RadarChart";
import HeatmapChart from "@/components/charts/HeatmapChart";
import FunnelChart from "@/components/charts/FunnelChart";
import CalendarChart from "@/components/charts/CalendarChart";
import BumpChart from "@/components/charts/BumpChart";
import AreaBumpChart from "@/components/charts/AreaBumpChart";
import StreamChart from "@/components/charts/StreamChart";
import TreemapChart from "@/components/charts/TreemapChart";
import SankeyChart from "@/components/charts/SankeyChart";
import ScatterChart from "@/components/charts/ScatterChart";
import NetworkChart from "@/components/charts/NetworkChart";
import ChordChart from "@/components/charts/ChordChart";
import SunburstChart from "@/components/charts/SunburstChart";
import CirclePackingChart from "@/components/charts/CirclePackingChart";
import WaffleChart from "@/components/charts/WaffleChart";
import RadialBarChart from "@/components/charts/RadialBarChart";
import SwarmplotChart from "@/components/charts/SwarmplotChart";
import MarimekkoChart from "@/components/charts/MarimekkoChart";
import ParallelCoordinatesChart from "@/components/charts/ParallelCoordinatesChart";

import {
  kpiData,
  revenueByChannel,
  trafficTrend,
  trafficSources,
  channelPerformance,
  engagementHeatmap,
  conversionFunnel,
  calendarData,
  channelRankings,
  areaBumpData,
  streamData,
  budgetAllocation,
  journeySankey,
  campaignScatter,
  networkData,
  chordMatrix,
  chordKeys,
  sunburstData,
  circlePackingData,
  waffleData,
  radialBarData,
  swarmplotData,
  marimekkoData,
  parallelData,
} from "@/lib/mockData";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <Header
        title="Overview"
        subtitle="Marketing performance dashboard — Customer journey analytics"
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {kpiData.map((kpi, i) => (
          <KPICard key={kpi.label} {...kpi} delay={i * 60} />
        ))}
      </div>

      {/* Row 1: Revenue Bar + Traffic Line */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard
          title="Revenue by Channel"
          subtitle="Revenue vs. cost breakdown per acquisition channel"
          className="animate-fade-in-up opacity-0 stagger-1"
        >
          <BarChart
            data={revenueByChannel}
            keys={["revenue", "cost"]}
            indexBy="channel"
            grouped
          />
        </ChartCard>

        <ChartCard
          title="Traffic & Conversions Trend"
          subtitle="Monthly sessions and conversion volume over time"
          className="animate-fade-in-up opacity-0 stagger-2"
        >
          <LineChart data={trafficTrend} />
        </ChartCard>
      </div>

      {/* Row 2: Pie + Radar + Radial Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <ChartCard
          title="Traffic Sources"
          subtitle="Distribution of traffic by acquisition source"
          className="animate-fade-in-up opacity-0 stagger-3"
        >
          <PieChart data={trafficSources} />
        </ChartCard>

        <ChartCard
          title="Channel Performance"
          subtitle="Multi-metric comparison across channels"
          className="animate-fade-in-up opacity-0 stagger-4"
        >
          <RadarChart
            data={channelPerformance}
            keys={["organic", "paid", "social", "email"]}
            indexBy="metric"
          />
        </ChartCard>

        <ChartCard
          title="Key Metrics"
          subtitle="Open rate, CTR, conversion, and retention"
          className="animate-fade-in-up opacity-0 stagger-5"
        >
          <RadialBarChart data={radialBarData} />
        </ChartCard>
      </div>

      {/* Row 3: Funnel + Sankey */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard
          title="Conversion Funnel"
          subtitle="Lead-to-customer pipeline stages"
          className="animate-fade-in-up opacity-0 stagger-3"
        >
          <FunnelChart data={conversionFunnel} />
        </ChartCard>

        <ChartCard
          title="Customer Journey Flow"
          subtitle="Traffic flow from source to conversion"
          className="animate-fade-in-up opacity-0 stagger-4"
          height="h-[400px]"
        >
          <SankeyChart data={journeySankey} />
        </ChartCard>
      </div>

      {/* Row 4: Heatmap + Scatter */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard
          title="Engagement Heatmap"
          subtitle="Activity levels by day of week and time"
          className="animate-fade-in-up opacity-0 stagger-5"
        >
          <HeatmapChart data={engagementHeatmap} />
        </ChartCard>

        <ChartCard
          title="Campaign Spend vs. Conversions"
          subtitle="Scatter analysis of campaign ROI"
          className="animate-fade-in-up opacity-0 stagger-6"
        >
          <ScatterChart data={campaignScatter} />
        </ChartCard>
      </div>

      {/* Row 5: Bump + Area Bump */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard
          title="Channel Rankings Over Time"
          subtitle="Quarterly ranking evolution by channel"
          className="animate-fade-in-up opacity-0 stagger-3"
        >
          <BumpChart data={channelRankings} />
        </ChartCard>

        <ChartCard
          title="Strategy Performance Trends"
          subtitle="Area bump showing strategy volume shifts"
          className="animate-fade-in-up opacity-0 stagger-4"
        >
          <AreaBumpChart data={areaBumpData} />
        </ChartCard>
      </div>

      {/* Row 6: Stream + Treemap */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard
          title="Ad Spend Stream"
          subtitle="Monthly advertising expenditure by channel"
          className="animate-fade-in-up opacity-0 stagger-5"
        >
          <StreamChart
            data={streamData}
            keys={["Display Ads", "Social Ads", "Search Ads", "Email", "Affiliate"]}
          />
        </ChartCard>

        <ChartCard
          title="Budget Allocation"
          subtitle="Marketing budget breakdown by category"
          className="animate-fade-in-up opacity-0 stagger-6"
        >
          <TreemapChart data={budgetAllocation} />
        </ChartCard>
      </div>

      {/* Row 7: Network + Chord + Sunburst */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <ChartCard
          title="Channel Network"
          subtitle="Relationships between marketing channels"
          className="animate-fade-in-up opacity-0 stagger-3"
        >
          <NetworkChart data={networkData} />
        </ChartCard>

        <ChartCard
          title="Channel Interactions"
          subtitle="Cross-channel attribution flow"
          className="animate-fade-in-up opacity-0 stagger-4"
        >
          <ChordChart matrix={chordMatrix} keys={chordKeys} />
        </ChartCard>

        <ChartCard
          title="Customer Journey Stages"
          subtitle="Hierarchical breakdown of journey touchpoints"
          className="animate-fade-in-up opacity-0 stagger-5"
        >
          <SunburstChart data={sunburstData} />
        </ChartCard>
      </div>

      {/* Row 8: Circle Packing + Waffle + Swarmplot */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <ChartCard
          title="Audience Segments"
          subtitle="Customer segments by industry and company size"
          className="animate-fade-in-up opacity-0 stagger-3"
        >
          <CirclePackingChart data={circlePackingData} />
        </ChartCard>

        <ChartCard
          title="Campaign Completion"
          subtitle="Progress tracking across campaign milestones"
          className="animate-fade-in-up opacity-0 stagger-4"
        >
          <WaffleChart data={waffleData} />
        </ChartCard>

        <ChartCard
          title="Lead Score Distribution"
          subtitle="Lead scores by quarter with swarm visualization"
          className="animate-fade-in-up opacity-0 stagger-5"
        >
          <SwarmplotChart data={swarmplotData} />
        </ChartCard>
      </div>

      {/* Row 9: Marimekko + Parallel Coordinates */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard
          title="Channel Sentiment Analysis"
          subtitle="Agreement vs. disagreement by marketing channel"
          className="animate-fade-in-up opacity-0 stagger-3"
        >
          <MarimekkoChart data={marimekkoData} />
        </ChartCard>

        <ChartCard
          title="Campaign Comparison"
          subtitle="Multi-dimensional campaign performance analysis"
          className="animate-fade-in-up opacity-0 stagger-4"
        >
          <ParallelCoordinatesChart data={parallelData} />
        </ChartCard>
      </div>

      {/* Row 10: Calendar (full width) */}
      <div className="mb-6">
        <ChartCard
          title="Activity Calendar"
          subtitle="Daily engagement intensity throughout 2025"
          height="h-[200px]"
          className="animate-fade-in-up opacity-0 stagger-5"
        >
          <CalendarChart data={calendarData} />
        </ChartCard>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-xs text-muted">
        <p className="font-serif text-sm tracking-tight text-primary/40">Boardio.ai</p>
        <p className="mt-1">Marketing Intelligence Dashboard</p>
      </footer>
    </DashboardShell>
  );
}
