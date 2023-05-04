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
  travel: ITravel | null;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  isOpenModal: boolean;
  newTravel: (formData: TTravelSchema) => Promise<void>;
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
  accommodation: number;
  food: number;
  id: number;
  initialValue: number;
  local: string;
  month: string;
  others: number;
  shopping: number;
  tours: number;
  transport: number;
  userId: number;
  travel: ISaving[];
}

export const TravelContext = createContext({} as ITravelContext);

export const TravelProvider = ({ children }: ITravelProviderProps) => {
  // const [savings, setSavings] = useState<ISaving>({} as ISaving);

  const { user } = useContext(UserContext);

  const [savings, setSavings] = useState<ISaving[]>([]);
  const [travel, setTravel] = useState(null);
  const [travelId, setTravelId] = useState(null);

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
      loadSavings();

      setIsOpenModal(false);

      console.log("passei na requisição:", data);
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

  const loadSavings = async () => {
    if (savings) {
      try {
        const { data } = await api.get(
          `users/${idLocalStorage}?_embed=savings&_embed=travel`,
          {
            headers: {
              Authorization: `Bearer ${tokenLocalStorage}`,
            },
          }
        );
        setTravel(data.travel[0] || null);
        setTravelId(data.travel[0].id || null);
        setSavings(data.savings || []);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    if (tokenLocalStorage && idLocalStorage) {
      loadSavings();
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
  //     console.log(data)
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
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export const useTravelContext = () => useContext(TravelContext);
