// import { useTravelContext } from "../../../providers/TravelContext";

import { useContext } from "react";
import { StyledLi } from "./style";
import { TravelContext } from "../../../providers/TravelContext";

export const SavingsCard = () => {
  const { savings } = useContext(TravelContext);

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
        <h3>Em Fevereiro economizei: R$ 500,00</h3>
      </StyledLi>
      <StyledLi>
        <h3>Em Março economizei: R$ 500,00</h3>
      </StyledLi>
      <StyledLi>
        <h3>Em Abril economizei: R$ 500,00</h3>
      </StyledLi>
    </>
  );
};
