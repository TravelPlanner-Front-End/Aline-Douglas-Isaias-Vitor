import { RegisterNewValueForm } from "../../components/Form/RegisterNewValueForm";
import { SavingsList } from "../../components/SavingsList";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { TravelContext } from "../../providers/TravelContext";
import toggleImg from "../../assets/vector-dashboard-vazio 1.svg";
import { FinancialSummary } from "../../components/FinancialSummary";
import { ModalTravel } from "../../components/ModalTravel";
import { StyledHomeSection } from "./style";

export const HomePage = () => {
  const { setIsOpenModal, isOpenModal, travel } = useContext(TravelContext);
  console.log(travel)
  return (
    <>
      <Header />
      {isOpenModal == true ? <ModalTravel /> : null}
      {travel ? (
        <StyledHomeSection>
          <div className="travelContainer">
            <RegisterNewValueForm />
            <FinancialSummary />
          </div>
          <SavingsList />
        </StyledHomeSection>
      ) : (
        <div>
          <img src={toggleImg} alt="Pessoa no  viajando no avião" />
          <button onClick={() => setIsOpenModal(true)}>
            Cadastre seu planejamento
          </button>
        </div>
      )}
    </>
  );
};
