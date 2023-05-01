import logo from "../../../assets/Group 202.svg"
import Input from "../../../fragments/Input";

export const RegisterUserForm = () => {

    return (
        <form>
            <img src={logo} alt="Travel planner" />
            <h2>Crie sua conta</h2>
            <Input
                type="text"
                id="nome"
                label="Nome"
                placeholder="Digite aqui o seu nome"
            />
            <Input
                type="text"
                id="email"
                label="Email"
                placeholder="Digite aqui o seu email"
            />
            <Input
                type="password"
                id="password"
                label="Senha"
                placeholder="Digite aqui a sua senha"
            />
            <Input
                type="password"
                id="password-confirm"
                label="Confirmar Senha"
                placeholder="Digite novamente a sua senha"
            />
            <button>Cadastrar</button>
        </form>
    )
}