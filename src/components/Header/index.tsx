// import { useMobile } from "../../hooks/useMobile";
// import { HeaderDesktop } from "./Desktop";
// import { HeaderMobile } from "./mobile";

import { useContext } from "react";
import { TravelContext } from "../../providers/TravelContext";
import { UserContext } from "../../providers/UserContext";

export const Header = () => {
  // const isMobile = useMobile(769)

  const { travel } = useContext(TravelContext);
  const { user, userLogout } = useContext(UserContext);

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

// const { user, userLogout } = useContext(UserContext);
// const { travel } = useContext(TravelContext);

// return (
//   <>
//     {travel ? (
//       <header>
//         <h1>
//           Olá, <span>{user?.name}</span>
//         </h1>
//         <button>Excluir planejamento</button>
//         <button onClick={() => userLogout()}>Sair</button>
//       </header>
//     ) : (
//       <header>
//         <h1>
//           Olá, <span>{user?.name}</span>
//         </h1>
//         <button onClick={() => userLogout()}>Sair</button>
//       </header>
//     )}
//   </>
// );
