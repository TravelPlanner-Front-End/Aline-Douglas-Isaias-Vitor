import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { TravelContext } from "../../providers/TravelContext";
import { StyledHeaderBox } from "./style";
import { FaAlignRight } from "react-icons/fa";

export const Header = () => {
  const { user, userLogout } = useContext(UserContext);
  const { travel, deleteTravel, deleteSavings, savings, setSavings } =
    useContext(TravelContext);

  const [isOpenHamburguerMenu, setIsOpenHamburguerMenu] = useState(false);

  const handleDelete = async () => {
    if (savings.length > 0) {
      savings.forEach((saving) => {
        deleteSavings(saving.id);
      });
      setSavings([]);
    }

    if (travel.length > 0) {
      await deleteTravel();
    }
  };

  const hambleMenu = () => {
    if (isOpenHamburguerMenu) {
      setIsOpenHamburguerMenu(false);
    } else {
      setIsOpenHamburguerMenu(true);
    }
  };

  return (
    <>
      <StyledHeaderBox>
        <div className="containerHeader">
          <div className="divUser">
            <h1>
              Olá, <span>{user?.name}</span>
            </h1>
          </div>
          <div className="divButtons">
            <FaAlignRight
              className="iconHamburguer"
              onClick={() => hambleMenu()}
            />
            {travel.length > 0 ? (
              <button onClick={() => handleDelete()} className="buttonDelete">
                Excluir planejamento
              </button>
            ) : null}

            <button className="buttonLogout" onClick={() => userLogout()}>
              Sair
            </button>
          </div>

          {isOpenHamburguerMenu ? (
            <div className="divMenuHamburguer">
              {travel ? (
                <button
                  onClick={() => handleDelete()}
                  className="buttonDeleteHamburguer"
                >
                  Excluir planejamento
                </button>
              ) : null}

              <button
                className="buttonLogoutHamburguer"
                onClick={() => userLogout()}
              >
                Sair
              </button>
            </div>
          ) : null}
        </div>
      </StyledHeaderBox>
    </>
  );
};

