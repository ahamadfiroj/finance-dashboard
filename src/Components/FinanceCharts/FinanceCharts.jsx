import { Chart } from "react-google-charts";
import { FinanceChartsWrapper } from "./FinanceCharts.style";
import EmptyState from "../EmptyState";
import { formatCurrency } from "../../Utils/utils";

const FinanceCharts = ({ trendData, outstandingByProject }) => {
  const trendChartData = [
    ["Month", "Billed", "Received"],
    ...trendData.map((entry) => [entry.month, entry.billed, entry.received]),
  ];
  const outstandingChartData = [
    ["Project", "Outstanding", { role: "style" }, { role: "tooltip" }],
    ...outstandingByProject.map((item) => [
      item.projectName,
      item.value,
      "#1f4b99",
      `${item.projectName}: ${formatCurrency(item.value)}`,
    ]),
  ];

  return (
    <FinanceChartsWrapper>
      <article className="chart-card">
        <div className="card-head">
          <div>
            <span className="eyebrow">Trend</span>
            <h3>Billed vs received</h3>
          </div>
          <p>Last 6 invoice months</p>
        </div>
        <Chart
          chartType="LineChart"
          width="100%"
          height="320px"
          data={trendChartData}
          options={{
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
          }}
        />
      </article>

      <article className="chart-card">
        <div className="card-head">
          <div>
            <span className="eyebrow">Exposure</span>
            <h3>Project-wise outstanding</h3>
          </div>
          <p>Open receivables by active project</p>
        </div>
        {outstandingByProject.length ? (
          <Chart
            chartType="BarChart"
            width="100%"
            height="320px"
            data={outstandingChartData}
            options={{
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
            }}
          />
        ) : (
          <EmptyState
            title="No outstanding exposure"
            description="Filtered results do not currently have open receivables."
          />
        )}
      </article>
    </FinanceChartsWrapper>
  );
};

export default FinanceCharts;
