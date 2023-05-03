import { useTravelContext } from "../../providers/TravelContext";
import { StyledDiv } from "./style";

export const FinancialSummary = () => {
  const { travel, savings } = useTravelContext();

  let total = 0;

  if (travel) {
    total =
      travel?.accommodation +
      travel?.food +
      travel?.initialValue +
      travel?.others +
      travel?.shopping +
      travel?.transport;
  }

  let totalSavings = 0;

  if (savings && travel) {
    totalSavings = savings.reduce(
      (accumulator, currentValue) => accumulator + currentValue.value,
      travel.initialValue ? travel?.initialValue : 0
    );
  }

  const missingValue = total - totalSavings;

  // const monthsUntilTheTrip = travel?.month - savings?.length
  // {monthsUntilTheTrip}

  return (
    <StyledDiv>
      <p>
        Custo total da viagem{" "}
        <span className="totalTripCostAndMonths">
          {total.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </p>
      {missingValue >= total ? (
        <p>
          Valor faltante <span className="missingValue">{missingValue}</span>
        </p>
      ) : (
        <p>Você já economizou o valor necessário</p>
      )}
      <p>
        Faltam <span className="totalTripCostAndMonths"></span> meses para a
        viagem
      </p>
    </StyledDiv>
  );
};
