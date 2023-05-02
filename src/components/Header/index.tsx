import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const Header = () => {
  const { user } = useContext(UserContext);
  
  return (
    <header>
      {/* <h1>Olá, <span>{user?.email}</span></h1> */}
    </header>
  );
};
