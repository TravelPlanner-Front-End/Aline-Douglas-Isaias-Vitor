import { useTravelContext } from "../../providers/TravelContext";
import { useEffect } from "react";
import { StyledDiv } from "./style";
import { SavingsCard } from "./SavingCard";
import { v4 as uuidv4 } from "uuid";

export const SavingsList = () => {
  const { loadSavings, travel, savings } = useTravelContext();

  useEffect(() => {
    loadSavings();
  }, []);

  const initialValue = travel?.initialValue;

  let total = 0;

  if (savings && travel) {
    total = savings.reduce(
      (accumulator, currentValue) => accumulator + currentValue.value,
      initialValue ? initialValue : 0
    );
  }

  return (
    <StyledDiv>
      <ul>
        {savings
          ? savings.map((saving) => <SavingsCard key={uuidv4()} saving={saving} />)
          : null}
      </ul>
      <div>
        <p>Total economizado: {total}</p>
      </div>
    </StyledDiv>
  );
};
