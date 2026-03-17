import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  justify-content: flex-end;
  background: rgba(12, 22, 38, 0.42);
  backdrop-filter: blur(4px);

  .drawer {
    width: min(100%, 460px);
    height: 100%;
    padding: 24px;
    overflow-y: auto;
    background: #f7fafc;
    box-shadow: -12px 0 30px rgba(12, 22, 38, 0.18);
  }

  .drawer-head,
  .status-row,
  .section-head,
  .list-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
  }

  .drawer-head {
    margin-bottom: 18px;
  }

  .drawer-head h2,
  .section h3 {
    margin: 8px 0 0;
    color: #10233d;
  }

  .drawer-head button {
    border: 1px solid rgba(31, 75, 153, 0.14);
    background: #ffffff;
    color: #10233d;
    border-radius: 12px;
    padding: 10px 14px;
    cursor: pointer;
  }

  .eyebrow,
  .summary-item span,
  .section-head span,
  .muted {
    color: #5a6b82;
  }

  .eyebrow,
  .summary-item span {
    font-size: 0.76rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 700;
  }

  .status-row {
    margin-bottom: 22px;
    padding: 18px;
    border-radius: 18px;
    background: #ffffff;
    border: 1px solid rgba(31, 75, 153, 0.08);
  }

  .status-row p {
    color: #44556d;
    line-height: 1.6;
  }

  .summary-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    margin-bottom: 24px;
  }

  .summary-item {
    padding: 16px;
    border-radius: 16px;
    background: #ffffff;
    border: 1px solid rgba(31, 75, 153, 0.08);
  }

  .summary-item strong {
    display: block;
    margin-top: 8px;
    color: #10233d;
  }

  .section {
    margin-bottom: 22px;
    padding: 20px;
    border-radius: 20px;
    background: #ffffff;
    border: 1px solid rgba(31, 75, 153, 0.08);
  }

  .section-head {
    margin-bottom: 14px;
  }

  .list {
    display: grid;
    gap: 12px;
  }

  .list-row {
    padding: 14px 0;
    border-bottom: 1px solid rgba(31, 75, 153, 0.08);
    color: #44556d;
  }

  .list-row:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }

  @media (max-width: 720px) {
    .summary-grid {
      grid-template-columns: 1fr;
    }

    .status-row,
    .list-row,
    .section-head {
      flex-direction: column;
    }
  }
`;
