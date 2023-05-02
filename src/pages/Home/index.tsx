import { RegisterNewValueForm } from "../../components/Form/RegisterNewValueForm";
import { SavingsList } from "../../components/SavingsList";
import { FinancialSummary } from "../../components/FinancialSummary";

export const HomePage = () => {
  return (
    <>
      <RegisterNewValueForm />
      <SavingsList/>
      <FinancialSummary/>
    </>
  );
};
