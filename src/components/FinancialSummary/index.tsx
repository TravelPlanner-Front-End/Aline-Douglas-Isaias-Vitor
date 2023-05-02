import { StyledDiv } from "./style";

export const FinancialSummary = () => {
  return (
    <StyledDiv>
      <p>
        Custo total da viagem <span className="totalTripCostAndMonths">RS 1450,00</span>
      </p>
      <p>
        Valor faltante <span className="missingValua">R$ 750,00</span>
      </p>
      <p>
        Faltam <span className="totalTripCostAndMonths">3 meses</span> para a viagem
      </p>
    </StyledDiv>
  );
};
