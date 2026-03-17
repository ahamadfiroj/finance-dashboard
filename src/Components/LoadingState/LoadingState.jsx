import { LoadingStateWrapper } from "./LoadingState.style";

const LoadingState = () => {
  return (
    <LoadingStateWrapper>
      <div className="pulse title" />
      <div className="pulse grid" />
      <div className="pulse grid" />
      <div className="pulse table" />
    </LoadingStateWrapper>
  );
};

export default LoadingState;
