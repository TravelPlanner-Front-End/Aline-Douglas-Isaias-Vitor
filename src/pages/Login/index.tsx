import image from "../../assets/Vectors.svg";
import LoginForm from "../../components/Form/LoginForm";
import { StyledLoginPage } from "./style";

export const LoginPage = () => {

  return (
    <StyledLoginPage>
      <LoginForm />
      <div>
        <img src={image} alt="Viajantes de malas prontas" />
      </div>
    </StyledLoginPage>
  );
};

