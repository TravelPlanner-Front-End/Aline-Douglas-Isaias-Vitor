import { ISaving } from "../../../providers/TravelContext";
import { StyledLi } from "./style";

interface ISavingCardsProps {
  saving: ISaving;
}

export const SavingsCard = ({ saving }: ISavingCardsProps) => {
  return (
    <StyledLi>
      <h3>
        Em {saving.month} economizei: <span>{`R$ ${saving.value}`}</span>
      </h3>
    </StyledLi>
  );
};
