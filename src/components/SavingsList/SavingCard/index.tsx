import { useTravelContext } from "../../../providers/TravelContext";
import { StyledLi } from "./style";

export const SavingsCard = () => {
  const { savings } = useTravelContext();

  return (
    <>
      {/* {savings.map((saving) => (
        <StyledLi key={saving.id}>
          <h3>
            Em {saving.month} economizei: <span  style={saving.value > 100 ?  { color: "#FF0000" } : { color: "#0B8800" }}>{saving.value}</span>
          </h3>
        </StyledLi>
      ))} */}

      <StyledLi>
        <h3>Em Fevereiro economizei: <span>R$ 500,00</span></h3>
      </StyledLi>
      <StyledLi>
        <h3>Em Março economizei: <span>R$ 500,00</span></h3>
      </StyledLi>
      <StyledLi>
        <h3>Em Abril economizei: <span>R$ 500,00</span></h3>
      </StyledLi>
    </>
  );
};
