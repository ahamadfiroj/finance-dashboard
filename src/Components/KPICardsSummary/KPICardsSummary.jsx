import KPICard from "../KPICard";
import { KPICardsSummaryWrapper } from "./KPICardsSummary.style";

const KPICardsSummary = ({ cards }) => {
  return (
    <KPICardsSummaryWrapper>
      {cards.map((card) => (
        <KPICard
          key={card.id}
          eyebrow={card.eyebrow}
          title={card.title}
          value={card.value}
          change={card.change}
          tone={card.tone}
        />
      ))}
    </KPICardsSummaryWrapper>
  );
};

export default KPICardsSummary;
