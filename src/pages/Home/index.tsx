import { RegisterNewValueForm } from "../../components/Form/RegisterNewValueForm";
import { SavingsList } from "../../components/SavingsList";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { TravelContext } from "../../providers/TravelContext";
import toggleImg from "../../assets/vector-dashboard-vazio 1.svg"
import { FinancialSummary } from "../../components/FinancialSummary";

export const HomePage = () => {
  const { travel } = useContext(TravelContext); 
  
  return (
    <>
      <Header />
      {travel ? (
        <>
          <RegisterNewValueForm />
          <SavingsList />
          <FinancialSummary />
        </>
      ) : (
        <div>
          <img src={toggleImg} alt="Pessoa no  viajando no avião" />
          <button>Cadastre seu planejamento</button>
        </div>
      )}
    </>
  );
};
     
      
