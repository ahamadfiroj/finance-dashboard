import { EmptyStateWrapper } from "./EmptyState.style";

const EmptyState = ({ title, description }) => {
  return (
    <EmptyStateWrapper>
      <h3>{title}</h3>
      <p>{description}</p>
    </EmptyStateWrapper>
  );
};

export default EmptyState;
