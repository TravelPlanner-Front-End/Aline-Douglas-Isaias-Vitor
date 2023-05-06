import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-hot-toast";
import { UserContext } from "./UserContext";
import { TTravelSchema } from "../schemas/travelSchema";
import { IRegisterNewValueForm } from "../components/Form/RegisterNewValueForm";

interface ITravelProviderProps {
  children: React.ReactNode;
}

interface ITravelContext {
  addNewValue: (formData: IRegisterNewValueForm) => Promise<void>;
  savings: ISaving[];
  travel: ITravel[];
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  isOpenModal: boolean;
  newTravel: (formData: TTravelSchema) => Promise<void>;
  deleteTravel: () => Promise<void>;
  deleteSavings: (id: number) => Promise<void>;
  setSavings: Dispatch<SetStateAction<ISaving[]>>;
}

export interface ISaving {
  month: string;
  value: number;
  userId: number;
  travelId: number;
  id: number;
}

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
}

export const TravelContext = createContext({} as ITravelContext);

export const TravelProvider = ({ children }: ITravelProviderProps) => {
  const { user } = useContext(UserContext);

  const [savings, setSavings] = useState<ISaving[]>([]);

  const [travel, setTravel] = useState<ITravel[]>([]);
  
  const [travelSave, setTravelSave] = useState([]);

  const [salvando, setSalvando] = useState([]);
  const [travelId, setTravelId] = useState(null);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const tokenLocalStorage = localStorage.getItem("@TRAVELER:TOKEN");
  const idLocalStorage = localStorage.getItem("@TRAVELER:ID");

  const newTravel = async (formData: TTravelSchema) => {
    const body = {
      ...formData,
      userId: idLocalStorage,
    };
    try {
      const { data } = await api.post("travel", body, {
        headers: {
          Authorization: `Bearer ${tokenLocalStorage}`,
        },
      });

      setTravelSave(data);

      setIsOpenModal(false);
      setTravel([data]);
      setTravelId(data.id);
    
    } catch (error) {
      console.error(error);
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
      console.error(error);
      toast.error("Ops! Algo deu errado.");
    }
  };

  const loadTravel = async () => {
    try {
      const { data } = await api.get(`/travel?userId=${idLocalStorage}`, {
        headers: {
          Authorization: `Bearer ${tokenLocalStorage}`,
        },
      });

      setTravel(data);
      setTravelId(data[0].id);
      loadSavings(data[0].id);
    } catch (error) {}
  };

  const loadSavings = async (id: number) => {
    try {
      const { data } = await api.get(`/savings?travelId=${id}`, {
        headers: {
          Authorization: `Bearer ${tokenLocalStorage}`,
        },
      });
      
      setSavings(data);

    } catch (error) {
      console.error(error);
    }
 
  };

  const deleteTravel = async () => {
   
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
      loadTravel();
    }
  }, [user]);

  return (
    <TravelContext.Provider
      value={{
        addNewValue,
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
