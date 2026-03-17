import styled, { css } from "styled-components";

const badgeTones = {
  paid: css`
    color: #0f8b6d;
    background: rgba(15, 139, 109, 0.12);
  `,
  partial: css`
    color: #9a6700;
    background: rgba(199, 125, 36, 0.14);
  `,
  pending: css`
    color: #2459a6;
    background: rgba(36, 89, 166, 0.12);
  `,
  overdue: css`
    color: #bf4b4b;
    background: rgba(191, 75, 75, 0.12);
  `,
};

export const StatusBadgeWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 112px;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.01em;

  ${({ $tone }) => badgeTones[$tone] || badgeTones.pending}
`;
