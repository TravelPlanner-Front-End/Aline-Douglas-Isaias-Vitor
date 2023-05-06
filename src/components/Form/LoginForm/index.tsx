import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../../../fragments/Input";
import { UserContext } from "../../../providers/UserContext";
import { TLoginSchema, loginSchema } from "../../../schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import logo from "../../../assets/Group 202.svg"
import { StyledLoginForm } from "./style";

const LoginForm = () => {
  const { loading, setLoading, userLogin } = useContext(UserContext);

  const { register, handleSubmit, formState: { errors } } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const submitLogin: SubmitHandler<TLoginSchema> = (loginData) => {
    userLogin(loginData, setLoading);
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(submitLogin)}>
      <img src={logo} alt="Travel planner" />
      <h1>Login</h1>
      <Input
        type="text"
        id="email"
        label="Email"
        placeholder="Digite seu email"
        error={errors.email}
        disabled={loading}
        {...register("email")}
      />

      <Input
        type="password"
        id="password"
        label="Senha"
        placeholder="Digite sua senha"
        error={errors.password}
        disabled={loading}
        {...register("password")}
      />
      
      <button type="submit">{loading ? "Entrando..." : "Entrar"}</button>
      <span>Ainda não possui uma conta?</span>
      <Link to="/register">Cadastre-se</Link>
    </StyledLoginForm>
  );
};

export default LoginForm;