import { ISaving } from "../../../providers/TravelContext";
import { StyledLi } from "./style";
import { v4 as uuidv4 } from "uuid";

interface ISavingCardsProps {
  saving: ISaving;
}

export const SavingsCard = ({ saving }: ISavingCardsProps) => {
  return (
    <StyledLi key={uuidv4()}>
      <h3>
        Em {saving.month} economizei: <span>{`R$ ${saving.value}`}</span>
      </h3>
    </StyledLi>
  );
};
