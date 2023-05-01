import { RegisterUserForm } from "../../components/Form/RegisterUserForm";
import imageRegister from "../../assets/vector-Register.svg";

export const RegisterPage = () => {

    return (
        <section>
            <RegisterUserForm />
            <div>
                <img src={imageRegister} alt="" />
            </div>
        </section>
    )
}