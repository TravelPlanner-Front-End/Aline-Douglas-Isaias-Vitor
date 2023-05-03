import { RegisterNewValueForm } from "../../components/Form/RegisterNewValueForm";
import { SavingsList } from "../../components/SavingsList";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { TravelContext } from "../../providers/TravelContext";
import toggleImg from "../../assets/vector-dashboard-vazio 1.svg"

export const HomePage = () => {
  const { savings } = useContext(TravelContext); 
  
  return (
    <>
      <Header />
      {savings.travel?.length !== 0 ? (
        <>
          <RegisterNewValueForm />
          <SavingsList/>
        </>
      ) : (
        <div>
          <img src={toggleImg} alt="Dashboard sem planejamento" />
          <button>Cadastre seu planejamento</button>
        </div>
      )}
    </>
  );
};
     
      
