import styled from "styled-components";

export const FinanceChartsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 20px;

  .chart-card {
    padding: 24px;
    border-radius: 24px;
    background: #ffffff;
    border: 1px solid rgba(25, 52, 96, 0.1);
    box-shadow: 0 20px 45px rgba(16, 24, 40, 0.08);
  }

  .card-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 18px;
  }

  .card-head h3 {
    margin: 6px 0 0;
    color: #10233d;
    font-size: 1.2rem;
  }

  .card-head p,
  .project-copy span {
    color: #5a6b82;
  }

  .eyebrow {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #6f7f95;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
