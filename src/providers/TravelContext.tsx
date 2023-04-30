import { createContext, useContext } from "react";

interface ITravelProviderProps {
    children: React.ReactNode;
  }

export const TravelContext = createContext({});

export const TravelProvider = ({children}: ITravelProviderProps) => {


    return (
        <TravelContext.Provider value={{}}>
            {children}
        </TravelContext.Provider>
    )
}

export const useTravelContext = () => useContext(TravelContext);