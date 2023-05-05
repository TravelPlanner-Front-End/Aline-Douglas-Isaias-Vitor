import { RegisterNewValueForm } from "../../components/Form/RegisterNewValueForm";
import { SavingsList } from "../../components/SavingsList";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { TravelContext } from "../../providers/TravelContext";
import toggleImg from "../../assets/vector-dashboard-vazio 1.svg";
import { FinancialSummary } from "../../components/FinancialSummary";
import { ModalTravel } from "../../components/ModalTravel";
import { StyledMainBox } from "./style";

export const HomePage = () => {
  const { setIsOpenModal, isOpenModal, travel } = useContext(TravelContext);

  return (
    <>
      <StyledMainBox>
        {isOpenModal == true ? <ModalTravel /> : null}
        <Header />
        {travel.length > 0 ? (
          <>
            <RegisterNewValueForm />
            <SavingsList />
            <FinancialSummary />
          </>
        ) : (
          <section className="sectionEmptyHome">
            <div className="container">
              <div className="divImgHome">
                <figure>
                  <img src={toggleImg} alt="Pessoa no viajando no avião" />
                </figure>
              </div>
              {/** <img src={toggleImg} alt="Pessoa no  viajando no avião" /> */}

              <div className="divButtonAddTravel">
                <button
                  className="buttonAddTravel"
                  onClick={() => setIsOpenModal(true)}
                >
                  Cadastre seu planejamento
                </button>
              </div>
            </div>
          </section>
        )}
      </StyledMainBox>
    </>
  );
};
