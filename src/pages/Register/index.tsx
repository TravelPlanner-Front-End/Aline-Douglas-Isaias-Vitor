import { RegisterUserForm } from "../../components/Form/RegisterUserForm";
import imageRegister from "../../assets/vector-Register.svg";
import { StyledSection } from "./style";

export const RegisterPage = () => {

    return (
        <StyledSection>
            <RegisterUserForm />
            <div>
                <img src={imageRegister} alt="" />
            </div>
        </StyledSection>
    )
}