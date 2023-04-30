import { createContext, useContext, useState } from "react";
import { TLoginSchema } from "../schemas/loginSchema";
import { api } from "../services/api";

interface IUserProviderPops {
  children: React.ReactNode;
}

interface IUserContext {
  userLogin: (loginData: TLoginSchema, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

interface IUser {
  id: number;
  email: string;
  password: string;
}

export const UserContext = createContext({} as IUserContext) 

export const UserProvider = ({ children }: IUserProviderPops) => {
  const [user, setUser] = useState<IUser | null>(null)

  const [loading, setLoading] = useState(false)

  const userLogin = async (loginData: TLoginSchema, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      setLoading(true)

      const { data } = await api.post("login", loginData);
      localStorage.setItem("@TRAVELER:TOKEN", data.accessToken)
      localStorage.setItem("@TRAVELER:ID", data.user.id)
      console.log('deu certo')

    } catch (error) {
      // console.error(error)      
    
    } finally {
      setLoading(false)
    }
  }

  return (
    <UserContext.Provider value={{ loading, setLoading, userLogin }}>
      {children}
    </UserContext.Provider>
  )
}