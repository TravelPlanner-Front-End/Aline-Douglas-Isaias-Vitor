import { Toaster } from "react-hot-toast";
import { RegisterNewValueForm } from "../../components/Form/RegisterNewValueForm";
import { SavingsList } from "../../components/SavingsList";

export const HomePage = () => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <RegisterNewValueForm />
      <SavingsList/>
    </>
  );
};
