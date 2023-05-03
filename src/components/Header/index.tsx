import { useContext } from "react";
import { TravelContext } from "../../providers/TravelContext";

export const Header = () => {
  const { setIsOpenModal, isOpenModal } = useContext(TravelContext);
  console.log(isOpenModal);
  return (
    <>
      <header>
        <button onClick={() => setIsOpenModal(true)}>add viagem</button>
      </header>
    </>
  );
};
