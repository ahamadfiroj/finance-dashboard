import styled from "styled-components";

export const SearchFilterWrapper = styled.section`
  display: grid;
  gap: 22px;
  padding: 28px;
  border-radius: 28px;
  background:
    radial-gradient(
      circle at top right,
      rgba(79, 136, 221, 0.22),
      transparent 32%
    ),
    linear-gradient(135deg, #15355f, #10233d 60%, #18355d);

  box-shadow: 0 30px 60px rgba(16, 35, 61, 0.3);

  .hero {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
  }
  label {
    .label {
      color: #ffffff;
    }
  }

  .hero-copy h1 {
    margin: 10px 0 8px;
    color: #ffffff;
    font-size: clamp(2rem, 4vw, 3.1rem);
    letter-spacing: -0.04em;
  }

  .hero-copy p {
    max-width: 780px;
    color: rgba(243, 247, 251, 0.78);
    font-size: 1rem;
    line-height: 1.6;
  }

  .eyebrow {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #b9cff1;
  }

  .filter-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 16px;
    padding: 18px;
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
  }

  .date-field,
  .select-field,
  .search-field {
    display: grid;
    gap: 8px;
  }

  .date-field span,
  .select-field span,
  .search-field span {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .date-field input,
  .search-field input {
    height: 46px;
    width: 100%;
    padding: 0 16px;
    border-radius: 14px;
    border: 1px solid rgba(212, 225, 245, 0.24);
    background: rgba(255, 255, 255, 0.95);
    color: #10233d;
    font-size: 0.95rem;
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  .export-btn {
    border: 0;
    border-radius: 14px;
    padding: 13px 20px;
    background: #f6c453;
    color: #10233d;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 10px 24px rgba(246, 196, 83, 0.3);
  }

  @media (max-width: 1200px) {
    .filter-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 720px) {
    padding: 20px;

    .hero,
    .filter-grid {
      grid-template-columns: 1fr;
      display: grid;
    }
  }
`;
