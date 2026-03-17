import styled, { css } from "styled-components";

const toneStyles = {
  neutral: css`
    border-top-color: #1f4b99;
  `,
  positive: css`
    border-top-color: #0f8b6d;
  `,
  warning: css`
    border-top-color: #c77d24;
  `,
  danger: css`
    border-top-color: #bf4b4b;
  `,
};

export const KPICardWrapper = styled.article`
  min-height: 152px;
  padding: 20px;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid rgba(25, 52, 96, 0.1);
  border-top: 4px solid transparent;
  box-shadow: 0 20px 45px rgba(16, 24, 40, 0.08);

  ${({ $tone }) => toneStyles[$tone] || toneStyles.neutral}

  .card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 18px;
  }

  .eyebrow {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #6f7f95;
  }

  .change {
    font-size: 0.82rem;
    color: #44556d;
  }

  .title {
    margin-bottom: 10px;
    font-size: 0.98rem;
    font-weight: 600;
    color: #20324a;
  }

  .value {
    font-size: clamp(1.65rem, 2vw, 2.1rem);
    font-weight: 700;
    line-height: 1.1;
    color: #10233d;
  }
`;
