import { Link } from "react-router-dom";
import astronautAndCat from "../../assets/Group 198.svg";
import { StyledNotFound } from "./style";

export const NotFound = () => {
  return (
    <StyledNotFound>
      <div>
        <img src={astronautAndCat} alt="Astronauta e gato espacial" />
      </div>
      <h1>404</h1>
      <h2>Viajante fora da rota...</h2>
      <Link to= "/">Voltar para rota</Link>
    </StyledNotFound>
  );
};

