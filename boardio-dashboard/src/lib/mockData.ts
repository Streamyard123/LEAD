// ─── Bar Chart Data ───
export const revenueByChannel = [
  { channel: "Organic", revenue: 48200, cost: 12400 },
  { channel: "Paid Search", revenue: 35800, cost: 18200 },
  { channel: "Social", revenue: 29400, cost: 8600 },
  { channel: "Email", revenue: 42100, cost: 3200 },
  { channel: "Referral", revenue: 18900, cost: 2100 },
  { channel: "Direct", revenue: 31500, cost: 0 },
];

// ─── Line Chart Data ───
export const trafficTrend = [
  {
    id: "Sessions",
    data: [
      { x: "Jan", y: 4200 }, { x: "Feb", y: 4800 }, { x: "Mar", y: 5100 },
      { x: "Apr", y: 6200 }, { x: "May", y: 5800 }, { x: "Jun", y: 7100 },
      { x: "Jul", y: 7800 }, { x: "Aug", y: 8200 }, { x: "Sep", y: 7600 },
      { x: "Oct", y: 8900 }, { x: "Nov", y: 9400 }, { x: "Dec", y: 10200 },
    ],
  },
  {
    id: "Conversions",
    data: [
      { x: "Jan", y: 420 }, { x: "Feb", y: 530 }, { x: "Mar", y: 610 },
      { x: "Apr", y: 720 }, { x: "May", y: 680 }, { x: "Jun", y: 850 },
      { x: "Jul", y: 920 }, { x: "Aug", y: 980 }, { x: "Sep", y: 890 },
      { x: "Oct", y: 1050 }, { x: "Nov", y: 1120 }, { x: "Dec", y: 1340 },
    ],
  },
];

// ─── Pie Chart Data ───
export const trafficSources = [
  { id: "Organic Search", label: "Organic Search", value: 38 },
  { id: "Paid Ads", label: "Paid Ads", value: 24 },
  { id: "Social Media", label: "Social Media", value: 18 },
  { id: "Email", label: "Email", value: 12 },
  { id: "Referral", label: "Referral", value: 8 },
];

// ─── Radar Chart Data ───
export const channelPerformance = [
  { metric: "Reach", organic: 85, paid: 95, social: 70, email: 60 },
  { metric: "Engagement", organic: 70, paid: 55, social: 90, email: 65 },
  { metric: "Conversion", organic: 60, paid: 80, social: 45, email: 75 },
  { metric: "Retention", organic: 75, paid: 40, social: 55, email: 90 },
  { metric: "ROI", organic: 90, paid: 65, social: 50, email: 85 },
  { metric: "Cost Efficiency", organic: 95, paid: 35, social: 60, email: 80 },
];

// ─── Heatmap Data ───
export const engagementHeatmap = (() => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = ["6am", "9am", "12pm", "3pm", "6pm", "9pm"];
  const data: { id: string; data: { x: string; y: number }[] }[] = [];
  days.forEach((day) => {
    data.push({
      id: day,
      data: hours.map((hour) => ({
        x: hour,
        y: Math.floor(Math.random() * 100),
      })),
    });
  });
  return data;
})();

// ─── Funnel Data ───
export const conversionFunnel = [
  { id: "Visitors", value: 14000, label: "Visitors" },
  { id: "Leads", value: 8200, label: "Leads" },
  { id: "Qualified", value: 4800, label: "Qualified" },
  { id: "Proposals", value: 2200, label: "Proposals" },
  { id: "Closed", value: 1100, label: "Closed" },
];

// ─── Calendar Data ───
export const calendarData = (() => {
  const data: { day: string; value: number }[] = [];
  const start = new Date("2025-01-01");
  const end = new Date("2025-12-31");
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    data.push({
      day: d.toISOString().split("T")[0],
      value: Math.floor(Math.random() * 300),
    });
  }
  return data;
})();

// ─── Bump Chart Data ───
export const channelRankings = [
  {
    id: "Organic",
    data: [
      { x: "Q1'24", y: 1 }, { x: "Q2'24", y: 2 }, { x: "Q3'24", y: 1 },
      { x: "Q4'24", y: 1 }, { x: "Q1'25", y: 2 }, { x: "Q2'25", y: 1 },
    ],
  },
  {
    id: "Paid",
    data: [
      { x: "Q1'24", y: 2 }, { x: "Q2'24", y: 1 }, { x: "Q3'24", y: 3 },
      { x: "Q4'24", y: 2 }, { x: "Q1'25", y: 1 }, { x: "Q2'25", y: 2 },
    ],
  },
  {
    id: "Social",
    data: [
      { x: "Q1'24", y: 3 }, { x: "Q2'24", y: 3 }, { x: "Q3'24", y: 2 },
      { x: "Q4'24", y: 4 }, { x: "Q1'25", y: 3 }, { x: "Q2'25", y: 3 },
    ],
  },
  {
    id: "Email",
    data: [
      { x: "Q1'24", y: 4 }, { x: "Q2'24", y: 4 }, { x: "Q3'24", y: 4 },
      { x: "Q4'24", y: 3 }, { x: "Q1'25", y: 4 }, { x: "Q2'25", y: 4 },
    ],
  },
];

// ─── Area Bump Data ───
export const areaBumpData = [
  {
    id: "SEO",
    data: [
      { x: "Jan", y: 40 }, { x: "Feb", y: 45 }, { x: "Mar", y: 50 },
      { x: "Apr", y: 55 }, { x: "May", y: 48 }, { x: "Jun", y: 60 },
    ],
  },
  {
    id: "PPC",
    data: [
      { x: "Jan", y: 30 }, { x: "Feb", y: 35 }, { x: "Mar", y: 38 },
      { x: "Apr", y: 42 }, { x: "May", y: 50 }, { x: "Jun", y: 45 },
    ],
  },
  {
    id: "Content",
    data: [
      { x: "Jan", y: 20 }, { x: "Feb", y: 25 }, { x: "Mar", y: 30 },
      { x: "Apr", y: 28 }, { x: "May", y: 35 }, { x: "Jun", y: 40 },
    ],
  },
  {
    id: "Social",
    data: [
      { x: "Jan", y: 10 }, { x: "Feb", y: 15 }, { x: "Mar", y: 12 },
      { x: "Apr", y: 18 }, { x: "May", y: 22 }, { x: "Jun", y: 25 },
    ],
  },
];

// ─── Stream Data ───
export const streamData = Array.from({ length: 12 }, (_, i) => ({
  month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i],
  "Display Ads": Math.floor(Math.random() * 40 + 20),
  "Social Ads": Math.floor(Math.random() * 35 + 15),
  "Search Ads": Math.floor(Math.random() * 50 + 30),
  "Email": Math.floor(Math.random() * 25 + 10),
  "Affiliate": Math.floor(Math.random() * 20 + 5),
}));

// ─── Treemap Data ───
export const budgetAllocation = {
  name: "Marketing Budget",
  children: [
    {
      name: "Digital",
      children: [
        { name: "Google Ads", value: 45000 },
        { name: "Facebook Ads", value: 32000 },
        { name: "LinkedIn Ads", value: 18000 },
        { name: "TikTok Ads", value: 12000 },
      ],
    },
    {
      name: "Content",
      children: [
        { name: "Blog", value: 15000 },
        { name: "Video", value: 25000 },
        { name: "Podcast", value: 8000 },
      ],
    },
    {
      name: "Events",
      children: [
        { name: "Conferences", value: 20000 },
        { name: "Webinars", value: 5000 },
      ],
    },
    {
      name: "Tools",
      children: [
        { name: "Analytics", value: 8000 },
        { name: "CRM", value: 12000 },
        { name: "Automation", value: 10000 },
      ],
    },
  ],
};

// ─── Sankey Data ───
export const journeySankey = {
  nodes: [
    { id: "Social Media" },
    { id: "Search Engine" },
    { id: "Email Campaign" },
    { id: "Direct Traffic" },
    { id: "Landing Page" },
    { id: "Product Page" },
    { id: "Blog" },
    { id: "Sign Up" },
    { id: "Free Trial" },
    { id: "Purchase" },
    { id: "Bounce" },
  ],
  links: [
    { source: "Social Media", target: "Landing Page", value: 3200 },
    { source: "Social Media", target: "Blog", value: 1800 },
    { source: "Search Engine", target: "Landing Page", value: 4500 },
    { source: "Search Engine", target: "Product Page", value: 2800 },
    { source: "Email Campaign", target: "Product Page", value: 2200 },
    { source: "Email Campaign", target: "Landing Page", value: 1500 },
    { source: "Direct Traffic", target: "Product Page", value: 1800 },
    { source: "Landing Page", target: "Sign Up", value: 4200 },
    { source: "Landing Page", target: "Bounce", value: 5000 },
    { source: "Product Page", target: "Sign Up", value: 3000 },
    { source: "Product Page", target: "Free Trial", value: 2100 },
    { source: "Blog", target: "Sign Up", value: 800 },
    { source: "Sign Up", target: "Free Trial", value: 5500 },
    { source: "Sign Up", target: "Bounce", value: 2500 },
    { source: "Free Trial", target: "Purchase", value: 4200 },
    { source: "Free Trial", target: "Bounce", value: 3400 },
  ],
};

// ─── Scatter Plot Data ───
export const campaignScatter = [
  {
    id: "Q1 Campaigns",
    data: Array.from({ length: 15 }, () => ({
      x: Math.floor(Math.random() * 5000 + 1000),
      y: Math.floor(Math.random() * 300 + 50),
    })),
  },
  {
    id: "Q2 Campaigns",
    data: Array.from({ length: 15 }, () => ({
      x: Math.floor(Math.random() * 5000 + 1000),
      y: Math.floor(Math.random() * 300 + 50),
    })),
  },
];

// ─── Network Data ───
export const networkData = {
  nodes: [
    { id: "Website", radius: 18, color: "#c9a87c" },
    { id: "Blog", radius: 12, color: "#1c1917" },
    { id: "Social", radius: 14, color: "#78716c" },
    { id: "Email", radius: 13, color: "#b08d5f" },
    { id: "Ads", radius: 15, color: "#44403c" },
    { id: "Events", radius: 10, color: "#a8a29e" },
    { id: "PR", radius: 9, color: "#d6d3d1" },
    { id: "SEO", radius: 11, color: "#292524" },
  ],
  links: [
    { source: "Website", target: "Blog", distance: 80 },
    { source: "Website", target: "Social", distance: 70 },
    { source: "Website", target: "Email", distance: 90 },
    { source: "Website", target: "Ads", distance: 60 },
    { source: "Blog", target: "SEO", distance: 50 },
    { source: "Social", target: "Ads", distance: 80 },
    { source: "Email", target: "Events", distance: 70 },
    { source: "Ads", target: "PR", distance: 90 },
    { source: "SEO", target: "Blog", distance: 40 },
    { source: "Events", target: "PR", distance: 60 },
  ],
};

// ─── Chord Data ───
export const chordMatrix = [
  [0, 2500, 1800, 1200, 800],
  [1500, 0, 2200, 900, 600],
  [1200, 1800, 0, 1500, 1100],
  [900, 600, 1200, 0, 2000],
  [500, 400, 800, 1500, 0],
];

export const chordKeys = ["Organic", "Paid", "Social", "Email", "Referral"];

// ─── Sunburst Data ───
export const sunburstData = {
  name: "Customer Journey",
  children: [
    {
      name: "Awareness",
      children: [
        { name: "Social Ads", value: 4200 },
        { name: "Blog Posts", value: 3100 },
        { name: "PR", value: 1800 },
        { name: "Influencers", value: 2400 },
      ],
    },
    {
      name: "Consideration",
      children: [
        { name: "Product Pages", value: 3800 },
        { name: "Case Studies", value: 2100 },
        { name: "Webinars", value: 1500 },
        { name: "Reviews", value: 2800 },
      ],
    },
    {
      name: "Decision",
      children: [
        { name: "Free Trial", value: 2900 },
        { name: "Demo Request", value: 1800 },
        { name: "Pricing Page", value: 3200 },
      ],
    },
    {
      name: "Retention",
      children: [
        { name: "Onboarding", value: 2200 },
        { name: "Support", value: 1600 },
        { name: "Upsell", value: 1200 },
      ],
    },
  ],
};

// ─── Circle Packing Data ───
export const circlePackingData = {
  name: "Audience",
  children: [
    {
      name: "Enterprise",
      children: [
        { name: "Tech", value: 4200 },
        { name: "Finance", value: 3800 },
        { name: "Healthcare", value: 2900 },
        { name: "Retail", value: 2100 },
      ],
    },
    {
      name: "SMB",
      children: [
        { name: "SaaS", value: 3500 },
        { name: "E-commerce", value: 2800 },
        { name: "Agency", value: 2200 },
        { name: "Consulting", value: 1800 },
      ],
    },
    {
      name: "Startup",
      children: [
        { name: "Pre-seed", value: 1200 },
        { name: "Seed", value: 2400 },
        { name: "Series A", value: 1800 },
      ],
    },
  ],
};

// ─── Waffle Data ───
export const waffleData = [
  { id: "completed", label: "Completed", value: 68 },
  { id: "in-progress", label: "In Progress", value: 18 },
  { id: "planned", label: "Planned", value: 14 },
];

// ─── Radial Bar Data ───
export const radialBarData = [
  { id: "Email", data: [{ x: "Open Rate", y: 68 }] },
  { id: "CTR", data: [{ x: "Click Rate", y: 42 }] },
  { id: "Conv.", data: [{ x: "Conversion", y: 28 }] },
  { id: "Retention", data: [{ x: "Retention", y: 85 }] },
];

// ─── Swarmplot Data ───
export const swarmplotData = Array.from({ length: 60 }, (_, i) => ({
  id: `p${i}`,
  group: ["Q1", "Q2", "Q3", "Q4"][Math.floor(Math.random() * 4)],
  value: Math.floor(Math.random() * 200 + 20),
}));

// ─── Marimekko Data ───
export const marimekkoData = [
  { statement: "Organic", agree: 48, disagree: 12, neutral: 40 },
  { statement: "Paid", agree: 35, disagree: 25, neutral: 40 },
  { statement: "Social", agree: 55, disagree: 15, neutral: 30 },
  { statement: "Email", agree: 62, disagree: 8, neutral: 30 },
  { statement: "Referral", agree: 70, disagree: 5, neutral: 25 },
];

// ─── Parallel Coordinates Data ───
export const parallelData = [
  { id: "Campaign A", reach: 95000, engagement: 4200, conversion: 380, cost: 2800, roi: 340 },
  { id: "Campaign B", reach: 72000, engagement: 3800, conversion: 420, cost: 1900, roi: 440 },
  { id: "Campaign C", reach: 110000, engagement: 5100, conversion: 290, cost: 3500, roi: 210 },
  { id: "Campaign D", reach: 55000, engagement: 2900, conversion: 510, cost: 1200, roi: 680 },
  { id: "Campaign E", reach: 88000, engagement: 4500, conversion: 350, cost: 2200, roi: 380 },
];

// ─── BoxPlot Data ───
export const boxplotData = [
  { group: "Organic", value: Math.random() * 100 },
  { group: "Organic", value: Math.random() * 100 },
  { group: "Organic", value: Math.random() * 100 },
  { group: "Organic", value: Math.random() * 100 },
  { group: "Organic", value: Math.random() * 100 },
  { group: "Organic", value: Math.random() * 100 + 20 },
  { group: "Organic", value: Math.random() * 100 + 10 },
  { group: "Paid", value: Math.random() * 80 + 10 },
  { group: "Paid", value: Math.random() * 80 + 10 },
  { group: "Paid", value: Math.random() * 80 + 10 },
  { group: "Paid", value: Math.random() * 80 + 10 },
  { group: "Paid", value: Math.random() * 80 + 10 },
  { group: "Paid", value: Math.random() * 80 + 10 },
  { group: "Social", value: Math.random() * 60 + 20 },
  { group: "Social", value: Math.random() * 60 + 20 },
  { group: "Social", value: Math.random() * 60 + 20 },
  { group: "Social", value: Math.random() * 60 + 20 },
  { group: "Social", value: Math.random() * 60 + 20 },
  { group: "Social", value: Math.random() * 60 + 20 },
  { group: "Email", value: Math.random() * 90 + 5 },
  { group: "Email", value: Math.random() * 90 + 5 },
  { group: "Email", value: Math.random() * 90 + 5 },
  { group: "Email", value: Math.random() * 90 + 5 },
  { group: "Email", value: Math.random() * 90 + 5 },
  { group: "Email", value: Math.random() * 90 + 5 },
];

// ─── KPI Data ───
export const kpiData = [
  { label: "Total Revenue", value: "$284,500", change: "+12.5%", trend: "up" as const, detail: "vs $252,800 last month", sparkData: [18, 22, 19, 25, 28, 24, 30, 32, 29, 35, 38, 42] },
  { label: "Active Users", value: "24,892", change: "+8.3%", trend: "up" as const, detail: "1,204 new this week", sparkData: [15, 18, 16, 20, 19, 22, 21, 24, 23, 25, 27, 28] },
  { label: "Conversion Rate", value: "3.42%", change: "+0.8%", trend: "up" as const, detail: "Above 3% target", sparkData: [2.1, 2.4, 2.8, 2.6, 3.0, 2.9, 3.1, 3.2, 3.0, 3.3, 3.4, 3.42] },
  { label: "Avg. Order Value", value: "$128", change: "-2.1%", trend: "down" as const, detail: "Was $131 last month", sparkData: [135, 132, 138, 130, 134, 131, 129, 133, 128, 130, 127, 128] },
  { label: "Customer LTV", value: "$1,240", change: "+15.2%", trend: "up" as const, detail: "Top 10% at $3,800+", sparkData: [850, 900, 920, 980, 1020, 1050, 1080, 1120, 1150, 1180, 1210, 1240] },
  { label: "Churn Rate", value: "2.1%", change: "-0.4%", trend: "up" as const, detail: "Lowest in 6 months", sparkData: [3.2, 3.0, 2.8, 2.9, 2.7, 2.6, 2.5, 2.4, 2.3, 2.2, 2.15, 2.1] },
];

// ─── Choropleth / Geo Data ───
export const geoData = [
  { id: "USA", value: 98200 },
  { id: "GBR", value: 42800 },
  { id: "CAN", value: 31500 },
  { id: "DEU", value: 28900 },
  { id: "FRA", value: 25400 },
  { id: "AUS", value: 22100 },
  { id: "BRA", value: 18700 },
  { id: "IND", value: 45200 },
  { id: "JPN", value: 16800 },
  { id: "CHN", value: 52400 },
  { id: "KOR", value: 14200 },
  { id: "MEX", value: 11800 },
  { id: "ESP", value: 15600 },
  { id: "ITA", value: 13900 },
  { id: "NLD", value: 12400 },
  { id: "SWE", value: 9800 },
  { id: "NOR", value: 7200 },
  { id: "SGP", value: 8500 },
  { id: "ARE", value: 6800 },
  { id: "ZAF", value: 5400 },
  { id: "NGA", value: 4200 },
  { id: "ARG", value: 7800 },
  { id: "COL", value: 5100 },
  { id: "IDN", value: 9200 },
  { id: "THA", value: 6100 },
  { id: "POL", value: 8900 },
  { id: "TUR", value: 7600 },
  { id: "RUS", value: 14800 },
  { id: "ISR", value: 5800 },
  { id: "PHL", value: 4800 },
];

// ─── Additional Stats ───
export const statsData = [
  { label: "Email Open Rate", value: "42.8%", change: "+3.2%", trend: "up" as const, detail: "Best: Welcome series (68%)", sparkData: [35, 37, 36, 39, 38, 40, 41, 39, 42, 41, 43, 42.8] },
  { label: "Social Engagement", value: "18.4K", change: "+22.1%", trend: "up" as const, detail: "Instagram leading (+34%)", sparkData: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 18.4] },
  { label: "Cost per Lead", value: "$24.50", change: "-8.7%", trend: "up" as const, detail: "Down from $26.84", sparkData: [32, 30, 29, 28, 27, 26.5, 26, 25.5, 25, 24.8, 24.6, 24.5] },
  { label: "MQL to SQL", value: "34.2%", change: "+5.1%", trend: "up" as const, detail: "682 SQLs this month", sparkData: [25, 26, 27, 28, 29, 30, 31, 32, 33, 33.5, 34, 34.2] },
  { label: "Pipeline Value", value: "$1.2M", change: "+18.4%", trend: "up" as const, detail: "42 deals in pipeline", sparkData: [700, 750, 800, 850, 900, 920, 950, 1000, 1050, 1100, 1150, 1200] },
  { label: "NPS Score", value: "72", change: "+4", trend: "up" as const, detail: "Promoters: 58%", sparkData: [60, 62, 63, 64, 66, 67, 68, 69, 70, 71, 71, 72] },
];
