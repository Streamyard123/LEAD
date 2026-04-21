// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const boardioTheme: any = {
  text: {
    fontSize: 11,
    fill: "#78716c",
    fontFamily: "Inter, system-ui, sans-serif",
  },
  axis: {
    domain: {
      line: {
        stroke: "#e7e5e4",
        strokeWidth: 1,
      },
    },
    ticks: {
      line: {
        stroke: "#e7e5e4",
        strokeWidth: 1,
      },
      text: {
        fontSize: 10,
        fill: "#a8a29e",
      },
    },
    legend: {
      text: {
        fontSize: 11,
        fill: "#78716c",
        fontWeight: 500,
      },
    },
  },
  grid: {
    line: {
      stroke: "#f5f4f2",
      strokeWidth: 1,
    },
  },
  legends: {
    text: {
      fontSize: 10,
      fill: "#78716c",
    },
  },
  labels: {
    text: {
      fontSize: 11,
      fill: "#1c1917",
      fontWeight: 500,
    },
  },
  tooltip: {
    container: {
      background: "#1c1917",
      color: "#ffffff",
      fontSize: 12,
      borderRadius: "2px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      padding: "8px 12px",
    },
  },
};

export const chartColors = [
  "#c9a87c",
  "#1c1917",
  "#78716c",
  "#d6d3d1",
  "#a8a29e",
  "#b08d5f",
  "#44403c",
  "#e7e5e4",
  "#292524",
  "#f5f4f2",
];

export const warmPalette = [
  "#c9a87c",
  "#b08d5f",
  "#d4a574",
  "#e8c9a0",
  "#a67c52",
  "#8b6914",
  "#d4a06a",
  "#c4956a",
];

export const springConfig = {
  stiffness: 90,
  damping: 15,
};
