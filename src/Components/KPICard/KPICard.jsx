import { KPICardWrapper } from "./KPICard.style";

const KPICard = ({ eyebrow, title, value, change, tone = "neutral" }) => {
  return (
    <KPICardWrapper $tone={tone}>
      <div className="card-top">
        <span className="eyebrow">{eyebrow}</span>
        <span className="change">{change}</span>
      </div>
      <p className="title">{title}</p>
      <p className="value">{value}</p>
    </KPICardWrapper>
  );
};

export default KPICard;
