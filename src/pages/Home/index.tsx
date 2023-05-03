import { RegisterNewValueForm } from "../../components/Form/RegisterNewValueForm";
import { SavingsList } from "../../components/SavingsList";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { TravelContext } from "../../providers/TravelContext";
import toggleImg from "../../assets/vector-dashboard-vazio 1.svg";
import { FinancialSummary } from "../../components/FinancialSummary";
import { ModalTravel } from "../../components/ModalTravel";

export const HomePage = () => {
  const { setIsOpenModal, isOpenModal, travel } = useContext(TravelContext);

  return (
    <>
      <Header />
      {isOpenModal == true ? <ModalTravel /> : null}
      {travel ? (
        <>
          <RegisterNewValueForm />
          <SavingsList />
          <FinancialSummary />
        </>
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
