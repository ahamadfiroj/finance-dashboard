import styled from "styled-components";

export const InvoiceTableWrapper = styled.section`
  display: grid;
  gap: 18px;
  padding: 24px;
  border-radius: 24px;
  background: #ffffff;
  border: 1px solid rgba(25, 52, 96, 0.1);
  box-shadow: 0 20px 45px rgba(16, 24, 40, 0.08);

  .table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .table-header h2 {
    margin: 6px 0 0;
    color: #10233d;
  }

  .table-header p,
  .pagination span {
    color: #5a6b82;
  }

  .eyebrow {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #6f7f95;
  }

  .table-scroll {
    overflow-x: auto;
  }

  table {
    width: 100%;
    min-width: 1080px;
    border-collapse: separate;
    border-spacing: 0;
  }

  th {
    position: sticky;
    top: 0;
    z-index: 1;
    background: #eef4fb;
    border-bottom: 1px solid rgba(31, 75, 153, 0.12);
    padding: 0;
    text-align: left;
  }

  th button {
    width: 100%;
    padding: 16px 18px;
    border: 0;
    background: transparent;
    text-align: left;
    font-size: 0.83rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: #44556d;
    cursor: pointer;
  }

  td {
    padding: 18px;
    border-bottom: 1px solid rgba(31, 75, 153, 0.08);
    color: #10233d;
    background: #ffffff;
  }

  tbody tr {
    cursor: pointer;
    transition: transform 120ms ease, box-shadow 120ms ease;
  }

  tbody tr:hover {
    transform: translateY(-1px);
    box-shadow: inset 0 0 0 999px rgba(238, 244, 251, 0.65);
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
  }

  .pagination button {
    border: 1px solid rgba(31, 75, 153, 0.14);
    background: #ffffff;
    color: #10233d;
    border-radius: 12px;
    padding: 10px 14px;
    cursor: pointer;
  }

  .pagination button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 720px) {
    padding: 18px;

    .table-header {
      align-items: flex-start;
      flex-direction: column;
    }

    .pagination {
      justify-content: space-between;
    }
  }
`;
