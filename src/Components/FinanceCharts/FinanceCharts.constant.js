export const TREND_CHART_OPTIONS = {
  backgroundColor: "transparent",
  chartArea: { left: 56, top: 24, width: "82%", height: "70%" },
  colors: ["#1f4b99", "#0f8b6d"],
  curveType: "function",
  legend: { position: "top", textStyle: { color: "#44556d" } },
  hAxis: { textStyle: { color: "#72839a" } },
  vAxis: {
    textStyle: { color: "#72839a" },
    format: "short",
    gridlines: { color: "rgba(46, 72, 117, 0.15)" },
  },
  lineWidth: 3,
  pointSize: 6,
};

export const OUTSTANDING_CHART_OPTIONS = {
  backgroundColor: "transparent",
  chartArea: { left: 130, top: 24, width: "72%", height: "72%" },
  legend: { position: "none" },
  hAxis: {
    textStyle: { color: "#72839a" },
    format: "short",
    gridlines: { color: "rgba(46, 72, 117, 0.15)" },
  },
  vAxis: { textStyle: { color: "#44556d" } },
  bar: { groupWidth: "56%" },
  tooltip: { textStyle: { color: "#10233d" } },
};
