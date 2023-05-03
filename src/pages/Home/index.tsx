import { RegisterNewValueForm } from "../../components/Form/RegisterNewValueForm";
import { SavingsList } from "../../components/SavingsList";
import { FinancialSummary } from "../../components/FinancialSummary";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { TravelContext } from "../../providers/TravelContext";
import { ModalTravel } from "../../components/ModalTravel";

export const HomePage = () => {
  const { setIsOpenModal, isOpenModal } = useContext(TravelContext);
  return (
    <>
      <Header />
      {isOpenModal == true ? <ModalTravel /> : null}
      <RegisterNewValueForm />
      <SavingsList />
      <FinancialSummary />
    </>
  );
};
