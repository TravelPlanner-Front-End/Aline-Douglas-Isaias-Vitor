import { Toaster } from "react-hot-toast";
import { RegisterNewValueForm } from "../../components/Form/RegisterNewValueForm";
import { SavingsList } from "../../components/SavingsList";
/** QUANDO USAR O TOAST SÓ IMOPORTAR O { toast } from "react-hot-toast" O CONTAINER <Toaster /> 
 * JÁ ESTÁ CONFIGURADO NO App **/
/*
o problema está aqui
      <SavingsList/>
*/
export const HomePage = () => {
  return (
    <>
      {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
      <RegisterNewValueForm />
      <h2>home</h2>
    </>
  );
};
