import { useTravelContext } from "../../providers/TravelContext";
import { StyledDiv } from "./style";
import { SavingsCard } from "./SavingCard";
import { v4 as uuidv4 } from "uuid";

export const SavingsList = () => {
  const {travel, savings } = useTravelContext();

  const initialValue = travel?.initialValue;

  let total = 0;

  if (savings && travel) {
    total = savings.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue.value),
      initialValue ? Number(initialValue) : 0
    );
  }
  
  return (
    <StyledDiv>
      <ul>
        {savings ? savings.map((saving) => <SavingsCard key={uuidv4()} saving={saving} />)
          : null}
      </ul>
      <div>
        <p>Total economizado: {total}</p>
      </div>
    </StyledDiv>
  );
};
