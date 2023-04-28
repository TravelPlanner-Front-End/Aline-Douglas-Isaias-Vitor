import Input from "../../fragments/Input";
import image from "../../assets/Vectors.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { TLoginSchema, loginSchema } from "../../schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod"


export const LoginPage = () => {
  const { loading, setLoading, userLogin } = useContext(UserContext);

  const { register, handleSubmit, formState: { errors } } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const submitLogin: SubmitHandler<TLoginSchema> = (loginData) => {
    userLogin(loginData, setLoading);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(submitLogin)}>
        <h1>Login</h1>
        <Input type="text" id="email" label="Email" 
          placeholder="Digite seu email" error={errors.email} disabled={loading}
          {...register("email")}
        />
        <Input type="password" id="password" label="Senha" 
          placeholder="Digite sua senha" error={errors.password} disabled={loading} 
          {...register("password")}
        />
        <button type="submit">{loading ? "Entrando..." : "Entrar"}</button>
        <Link to="/pagina de cardastro">Cadastre-se</Link>
      </form>
      <div>
        <img src={image} alt="Viajantes de malas prontas" />
      </div>
    </section>
  );
};

