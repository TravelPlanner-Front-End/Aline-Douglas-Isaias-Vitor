import { useContext } from "react";
import { TravelContext } from "../../providers/TravelContext";
import { RegisterTravelForm } from "../Form/RegisterTravelForm";
import { StyledCartModalBox } from "./style";

export const ModalTravel = () => {
  const { setIsOpenModal, isOpenModal } = useContext(TravelContext);
  return (
    <StyledCartModalBox>
      <div className="divBox">
        <RegisterTravelForm />
        <div className="divCloseModal">
          <button onClick={() => setIsOpenModal(false)}>Fechar</button>
        </div>
      </div>
    </StyledCartModalBox>
  );
};
