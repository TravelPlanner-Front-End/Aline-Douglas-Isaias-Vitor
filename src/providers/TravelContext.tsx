import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-hot-toast";
import { IRegisterNewValueForm } from "../components/Form/RegisterNewValueForm";
import { UserContext } from "./UserContext";

interface ITravelProviderProps {
  children: React.ReactNode;
}

interface ITravelContext {
  addNewValue: (formData: IRegisterNewValueForm) => Promise<void>;
  loadSavings: () => Promise<void>;
  savings: ISaving;
}

interface ITravel {
  local: string;
  userId: number;
  id: number;
  month: string;
  initialValue: number;
  accommodation: number;
  food: number;
  transport: number;
  shopping: number;
  others: number;
}

interface ISaving {
  email: string;
  password: string;
  name: string;
  id: number;
  travel: ITravel[];
}

export const TravelContext = createContext({} as ITravelContext);

export const TravelProvider = ({ children }: ITravelProviderProps) => {
  const [savings, setSavings] = useState<ISaving>({} as ISaving);

  const{ user } = useContext(UserContext);

  const tokenLocalStorage = localStorage.getItem("@TRAVELER:TOKEN");
  const idLocalStorage = localStorage.getItem("@TRAVELER:ID");

  // Parte da inclusão das economias do mês e renderização do resumo mensal
  const addNewValue = async (formData: IRegisterNewValueForm) => {
    const body = {
      ...formData,
      userId: idLocalStorage,
      travelId: "inserir id da travel",
    };
    try {
      const response = await api.post("/savings", body, {
        headers: {
          Authorization: `Bearer ${tokenLocalStorage}`,
        },
      });
      console.log(response);
      //   setSavings([...savings, response]);
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado.");
    }
  };

  const loadSavings = async () => {
    try {
      const { data } = await api.get(`users/${idLocalStorage}?_embed=travel`, {
        headers: {
          Authorization: `Bearer ${tokenLocalStorage}`,
        },
      });
      setSavings(data);
      console.log(data)
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado.");
    }
  };
  useEffect(()=>{
    if(tokenLocalStorage && idLocalStorage){
      loadSavings()
    }
  },[user])

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
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};

// export const useTravelContext = () => useContext(TravelContext);
