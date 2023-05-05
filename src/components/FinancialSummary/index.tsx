import { useTravelContext } from "../../providers/TravelContext";
import { StyledDiv } from "./style";

export const FinancialSummary = () => {
  const { travel, savings } = useTravelContext();

  let total = 0;

  if (travel) {
    total =
      Number(travel[0].accommodation) +
      Number(travel[0].food) +
      Number(travel[0].initialValue) +
      Number(travel[0].other_expenses) +
      Number(travel[0].shopping) +
      Number(travel[0].transport);
  }

  console.log(travel);

  let totalSavings = 0;

  if (savings && travel) {
    totalSavings = savings.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue.value),
      travel[0].initialValue ? Number(travel[0].initialValue) : 0
    );
  }
  console.log(totalSavings);
  console.log(total);
  const missingValue = total - totalSavings;

  console.log(missingValue);
  console.log(missingValue >= total);
  console.log(totalSavings >= total);

  // const monthsUntilTheTrip = travel?.month - savings.length
  // {monthsUntilTheTrip}

  return (
    <>
      {savings ? (
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
          {totalSavings >= total ? (
            <p>Você já economizou o valor necessário</p>
          ) : (
            <p>
              Valor faltante
              <span className="missingValue">{missingValue}</span>
            </p>
          )}
          {/* <p>
            Faltam <span className="totalTripCostAndMonths"></span> meses para a
            viagem
          </p> */}
        </StyledDiv>
      ) : (
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
          <p>
            <span className="missingValue">{`R$ ${{ total }}`}</span>
          </p>
          {/* <p>
            Faltam <span className="totalTripCostAndMonths"></span> meses para a
            viagem
          </p> */}
        </StyledDiv>
      )}
    </>
  );
};
