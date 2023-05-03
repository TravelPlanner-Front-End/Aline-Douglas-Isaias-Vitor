import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-hot-toast";
import { IRegisterNewValueForm } from "../components/Form/RegisterNewValueForm";

interface ITravelProviderProps {
  children: React.ReactNode;
}

interface ITravelContext {
  addNewValue: (formData: IRegisterNewValueForm) => Promise<void>;
  loadSavings: () => Promise<void>;
  savings: ISaving[] | null;
  travel: ITravel | null | undefined;
}

export interface ISaving {
  month: string;
  value: number;
  userId: number;
  travelId: number;
  id: number;
}

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
}

export const TravelContext = createContext({} as ITravelContext);

export const TravelProvider = ({ children }: ITravelProviderProps) => {

  const [savings, setSavings] = useState<ISaving[]>([]);
  const [travel, setTravel] = useState(null);
  const [travelId, setTravelId] = useState(null);

  const tokenLocalStorage = localStorage.getItem("@TRAVELER:TOKEN");
  const idLocalStorage = localStorage.getItem("@TRAVELER:ID");

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
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado.");
    }
  };

  const loadSavings = async () => {
    try {
      const { data } = await api.get(
        `users/${idLocalStorage}?_embed=savings&_embed=travel`,
        {
          headers: {
            Authorization: `Bearer ${tokenLocalStorage}`,
          },
        }
      );
      setTravel(data.travel[0]);
      setTravelId(data.travel[0].id);
      setSavings(data.savings);
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado.");
    }
  };

  return (
    <TravelContext.Provider
      value={{
        addNewValue,
        loadSavings,
        savings,
        travel,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export const useTravelContext = () => useContext(TravelContext);
