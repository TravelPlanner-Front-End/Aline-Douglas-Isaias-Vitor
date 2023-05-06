import { RegisterNewValueForm } from "../../components/Form/RegisterNewValueForm";
import { SavingsList } from "../../components/SavingsList";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { TravelContext } from "../../providers/TravelContext";
import toggleImg from "../../assets/vector-dashboard-vazio 1.svg";
import { FinancialSummary } from "../../components/FinancialSummary";
import { ModalTravel } from "../../components/ModalTravel";
import { StyledMainBox } from "./styleVoidHome";
import { StyledHomeSection } from "./style";

export const HomePage = () => {
  const { setIsOpenModal, isOpenModal, travel } = useContext(TravelContext);

  return (
    <>
      {isOpenModal == true ? <ModalTravel /> : null}
      <Header />
      <StyledMainBox>
        {travel.length > 0 ? (
          <>
            <StyledHomeSection>
              <div className="travelContainer">
                <RegisterNewValueForm />
                <FinancialSummary />
              </div>
              <SavingsList />
            </StyledHomeSection>
          </>
        ) : (
          <StyledMainBox className="sectionEmptyHome">
            <div className="container">
              <div className="divImgHome">
                <figure>
                  <img src={toggleImg} alt="Pessoa no viajando no avião" />
                </figure>
              </div>
              <div className="divButtonAddTravel">
                <button className="buttonAddTravel" onClick={() => setIsOpenModal(true)}>
                  Cadastre seu planejamento
                </button>
              </div>
            </div>
          </StyledMainBox>
        )}
      </StyledMainBox>
    </>
  );
};
