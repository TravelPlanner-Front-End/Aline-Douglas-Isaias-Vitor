import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { TravelContext } from "../../providers/TravelContext";

export const Header = () => {
  const { user, userLogout } = useContext(UserContext);
  const { travel } = useContext(TravelContext);

  return (
    <>
      {travel ? (
        <header>
          <h1>
            Olá, <span>{user?.name}</span>
          </h1>
          <button>Excluir planejamento</button>
          <button onClick={() => userLogout()}>Sair</button>
        </header>
      ) : (
        <header>
          <h1>
            Olá, <span>{user?.name}</span>
          </h1>
          <button onClick={() => userLogout()}>Sair</button>
        </header>
      )}
    </>
  );
};
