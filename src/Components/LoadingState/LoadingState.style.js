import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

export const LoadingStateWrapper = styled.div`
  display: grid;
  gap: 16px;

  .pulse {
    border-radius: 18px;
    background:
      linear-gradient(90deg, rgba(240, 244, 248, 0.8) 25%, rgba(224, 231, 239, 1) 37%, rgba(240, 244, 248, 0.8) 63%);
    background-size: 200% 100%;
    animation: ${shimmer} 1.4s ease infinite;
  }

  .title {
    height: 92px;
  }

  .grid {
    height: 160px;
  }

  .table {
    height: 420px;
  }
`;
