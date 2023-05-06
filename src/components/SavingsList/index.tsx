import { useTravelContext } from "../../providers/TravelContext";
import { StyledSavings } from "./style";
import { SavingsCard } from "./SavingCard";
import { v4 as uuidv4 } from "uuid";

export const SavingsList = () => {
  const { travel, savings } = useTravelContext();

  const initialValue = travel[0].initialValue;

  let total = 0;

  if (savings && travel) {
    total = savings.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue.value),
      initialValue ? Number(initialValue) : 0
    );
  }
console.log(total, "total")
  return (
    <StyledSavings>
      <ul>
        {savings
          ? savings.map((saving) => (
              <SavingsCard key={uuidv4()} saving={saving} />
            ))
          : null}
      </ul>
      {savings ? (
        <div>
          <p>Total economizado: {`R$ ${ total }`}</p>
        </div>
      ) : (
        <p>Cadastre sua primeira econimia</p>
      )}
    </StyledSavings>
  );
};
