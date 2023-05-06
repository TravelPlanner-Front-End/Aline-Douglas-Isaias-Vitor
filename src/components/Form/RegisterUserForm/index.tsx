import logo from "../../../assets/Group 202.svg"
import Input from "../../../fragments/Input";
import { useForm } from "react-hook-form";
import { TRegisterSchema, registerSchema } from "../../../schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../../providers/UserContext";
import { useContext } from "react";
import { StyledRegisterForm } from "./style";
import { Link } from "react-router-dom";


export const RegisterUserForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TRegisterSchema>({
        resolver: zodResolver(registerSchema),
    });
    const { registerUser } = useContext(UserContext);
    return (
        <StyledRegisterForm onSubmit={handleSubmit(registerUser)}>
            <img src={logo} alt="Travel planner" />
            <h2>Crie a sua conta</h2>
            <Input
                type="text"
                id="nome"
                label="Nome"
                placeholder="Digite aqui o seu nome"
                error={errors.name}
                {...register("name")}
            />
            <Input
                type="text"
                id="email"
                label="Email"
                placeholder="Digite aqui o seu email"
                error={errors.email}
                {...register("email")}
            />
            <Input
                type="password"
                id="password"
                label="Senha"
                placeholder="Digite aqui a sua senha"
                error={errors.password}
                {...register("password")}
            />
            <Input
                type="password"
                id="password-confirm"
                label="Confirmar Senha"
                placeholder="Digite novamente a sua senha"
                error={errors.confirmPassword}
                {...register("confirmPassword")}
            />
            <button type="submit">Cadastrar</button>
            <span>ou fazer</span>
            <Link to="/">Login</Link>
        </StyledRegisterForm>
    )
}