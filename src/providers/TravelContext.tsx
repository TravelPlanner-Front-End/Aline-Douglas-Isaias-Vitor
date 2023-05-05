import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { toast } from "react-hot-toast";
import { IRegisterNewValueForm } from "../components/Form/RegisterNewValueForm";
import { UserContext } from "./UserContext";
import { TTravelSchema } from "../schemas/travelSchema";

interface ITravelProviderProps {
  children: React.ReactNode;
}

interface ITravelContext {
  addNewValue: (formData: IRegisterNewValueForm) => Promise<void>;
  loadSavings: () => Promise<void>;
  savings: ISaving[];
  travel: ITravel[];
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  isOpenModal: boolean;
  newTravel: (formData: TTravelSchema) => Promise<void>;
  deleteTravel: () => Promise<void>;
  deleteSavings: (id: number) => Promise<void>;
  setSavings: Dispatch<SetStateAction<ISaving[]>>;
}

// interface ITravel {
//   local: string;
//   userId: number;
//   id: number;
//   month: string;
//   initialValue: number;
//   accommodation: number;
//   food: number;
//   transport: number;
//   shopping: number;
//   others: number;
// }

// interface ISaving {
//   email: string;
//   password: string;
//   name: string;
//   savings: ISaving[] | null;
//   travel: ITravel | null | undefined;
// }

export interface ISaving {
  month: string;
  value: number;
  userId: number;
  travelId: number;
  id: number;
}

// {
//   "local": "são paulo",
//   "userId": 2,
//   "id": 2,
//   "month": "abril",
//   "initialValue": 300,
//   "tours": 400,
//   "accommodation": 500,
//   "food": 500,
//   "transport": 600,
//   "shopping": 700,
//   "others": 200
// }

interface ITravel {
  accommodation: number | string;
  food: number | string;
  id: number | string;
  initialValue: number;
  local: string;
  month_of_travel: number | string;
  other_expenses: number | string;
  shopping: number | string;
  tours: number | string;
  transport: number | string;
  userId: number | string;
  //travel: ISaving[];
}

export const TravelContext = createContext({} as ITravelContext);

export const TravelProvider = ({ children }: ITravelProviderProps) => {
  // const [savings, setSavings] = useState<ISaving>({} as ISaving);

  const { user } = useContext(UserContext);

  const [savings, setSavings] = useState<ISaving[]>([]);

  const [travel, setTravel] = useState<ITravel[]>([]);
  //o registro sava a viagem aqui
  const [travelSave, setTravelSave] = useState([]);

  //meu teste pra salvar
  const [salvando, setSalvando] = useState([]);
  const [travelId, setTravelId] = useState(null);

  //const [testeDoTravel, setTesteDoTravel] = useState([]);

  //const [travel, setTravel] = useState([]);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const tokenLocalStorage = localStorage.getItem("@TRAVELER:TOKEN");
  const idLocalStorage = localStorage.getItem("@TRAVELER:ID");

  //add nova viagem
  const newTravel = async (formData: TTravelSchema) => {
    const body = {
      ...formData,
      userId: idLocalStorage,
    };
    try {
      //api teste
      const { data } = await api.post("travel", body, {
        headers: {
          Authorization: `Bearer ${tokenLocalStorage}`,
        },
      });

      //setTravel(data);
      //loadSavings();
      setTravelSave(data);

      setIsOpenModal(false);
      setTravel([data]);
      setTravelId(data.id);
    } catch (error) {
      console.log("deu erro");
    }
  };

  const addNewValue = async (formData: IRegisterNewValueForm) => {
    const body = {
      ...formData,
      userId: idLocalStorage,
      travelId: travelId,
    };
    try {
      const response = await api.post("/savings", body, {
        headers: {
          Authorization: `Bearer ${tokenLocalStorage}`,
        },
      });
      setSavings([...savings, response.data]);
      toast.success("Economia do mês cadastrada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado.");
    }
  };

  //meu teste

  /*
  const loadd = async () => {
    try {
      const { data } = await api.get("/savings?travelId=5", {
        headers: {
          Authorization: `Bearer ${tokenLocalStorage}`,
        },
      });

      setSalvando(data);

      
      
    } catch (error) {}
  };
*/
  const loadTravel = async () => {
    //if (travel.length > 0) {
    try {
      const { data } = await api.get(`/travel?userId=${idLocalStorage}`, {
        headers: {
          Authorization: `Bearer ${tokenLocalStorage}`,
        },
      });

      //setTesteDoTravel(data);
      setTravel(data);
      setTravelId(data[0].id);
    } catch (error) {}
  };
  //};

  const loadSavings = async () => {
    if (savings.length > 0) {
      try {
        const { data } = await api.get(
          `users/${idLocalStorage}?_embed=savings&_embed=travel`,
          {
            headers: {
              Authorization: `Bearer ${tokenLocalStorage}`,
            },
          }
        );
        //obs aparentemente resolveu o problema do id assim

        //não serve pra verificar se tem viagem
        //só serve pra ver se tem savings

        if (data.travel.length > 0) {
          //setTravel(data.travel[0]);
          setTravelId(data.travel[0].id);
          setSavings(data.savings);
        } else {
          //setTravel(null);
          setTravelId(null);
          setSavings([]);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      return;
    }
  };

  //delete travel

  const deleteTravel = async () => {
    ///setTravel([]);

    try {
      const { data } = await api.delete(`/travel/${travelId}`, {
        headers: {
          Authorization: `Bearer ${tokenLocalStorage}`,
        },
      });

      setTravelId(null);
      setTravel([]);

      toast.success("Viagem deletada");
    } catch (error) {
      toast.error("ops, ocorreu algum erro");
    }
  };

  const deleteSavings = async (id: number) => {
    try {
      const { data } = await api.delete(`/savings/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenLocalStorage}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (tokenLocalStorage && idLocalStorage) {
      loadSavings();
      //loadd();
      loadTravel();
    }
  }, [user]);

  /** 
  // const getUserTravel = async () => {
  //   try {
  //     const response = await api.get(`travel/${idLocalStorage}`, {
  //       headers: {
  //         Authorization: `Bearer ${tokenLocalStorage}`
  //       }
  //     })  // *** Caso precisem usar, sintam-se a vontade, caso não podem apagar *** //
  //    
  
  //   } catch (error) {
  //     console.error(error)
  //   }
  //   return response
  // }
  // getUserTravel()
  **/

  return (
    <TravelContext.Provider
      value={{
        addNewValue,
        loadSavings,
        savings,
        setIsOpenModal,
        isOpenModal,
        newTravel,
        travel,
        deleteTravel,
        deleteSavings,
        setSavings,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export const useTravelContext = () => useContext(TravelContext);
