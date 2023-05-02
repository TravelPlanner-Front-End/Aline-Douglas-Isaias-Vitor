import { useTravelContext } from "../../providers/TravelContext";
import { useEffect } from "react"
import { StyledDiv } from "./style";
import { SavingsCard } from "./SavingCard";


export const SavingsList = () => {

    const { loadSavings} = useTravelContext();

      useEffect(() => {
      loadSavings();
    }); // *** Falta adicionar o array de dependências }, []) *** //
  
    return (
      <StyledDiv>
        <ul>
          <SavingsCard/>
        </ul>
          <div><p>Total economizado: {}</p></div>
      </StyledDiv>
    );
  };
  