import { Chart } from "react-google-charts";
import { FinanceChartsWrapper } from "./FinanceCharts.style";
import EmptyState from "../EmptyState";
import {
  formatCurrency,
  getOutStandingChartData,
  getTrendChartData,
} from "../../Utils/utils";
import {
  OUTSTANDING_CHART_OPTIONS,
  TREND_CHART_OPTIONS,
} from "./FinanceCharts.constant";

const FinanceCharts = ({ trendData, outstandingByProject }) => {
  const trendChartData = getTrendChartData(trendData);
  const outstandingChartData = getOutStandingChartData(outstandingByProject);

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
          options={TREND_CHART_OPTIONS}
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
            options={OUTSTANDING_CHART_OPTIONS}
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
