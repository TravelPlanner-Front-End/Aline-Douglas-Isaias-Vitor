import image from "../../assets/Vectors.svg";
import LoginForm from "../../components/Form/LoginForm";

export const LoginPage = () => {

  return (
    <section>
      <LoginForm />
      <div>
        <img src={image} alt="Viajantes de malas prontas" />
      </div>
    </section>
  );
};

