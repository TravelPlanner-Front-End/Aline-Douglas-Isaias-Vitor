import { createContext, useEffect, useState } from "react";
import { TLoginSchema } from "../schemas/loginSchema";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { TRegisterSchema } from "../schemas/registerSchema";

interface IUserProviderPops {
  children: React.ReactNode;
}

interface IUserContext {
  userLogin: (loginData: TLoginSchema, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
  registerUser: (registerData:TRegisterSchema) => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  userLogout: () => void;
}

interface IUser {
  id: number;
  email: string;
  password: string;
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderPops) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser | null>(null)

  const [loading, setLoading] = useState(false)

  const userLogin = async (loginData: TLoginSchema, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      setLoading(true)

      const { data } = await api.post("login", loginData);
      localStorage.setItem("@TRAVELER:TOKEN", data.accessToken)
      localStorage.setItem("@TRAVELER:ID", data.user.id)

      setUser(data.user)

      toast.success("Login realizado com sucesso !")
      setTimeout(() => {
        navigate("/home")
      }, 3000)

    } catch (error) {
      // console.error(error)      

      toast.error("E-mail ou senha incorretos, tente novamente !")

    } finally {
      setLoading(false)
    }
  }

  const registerUser = async (registerData:TRegisterSchema) => {

    try {
      await api.post("register", registerData);
      toast("Cadastrado com sucesso!");
      navigate("/");

    } catch (error) {
      // console.error(error)   

      toast.error('Cadastro falhou')
    }

  };

  useEffect(() => {
    const token = localStorage.getItem("@TRAVELER:TOKEN")
    const userID = localStorage.getItem("@TRAVELER:ID")

    const autoLog = async () => {
      try {
        const { data } = await api.get(`/users/${userID}`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
        });
        setUser(data);
        navigate("/home");

      } catch (error) {
        console.error(error);

        setTimeout(() => {
          localStorage.removeItem("@TRAVELER:TOKEN")
          localStorage.removeItem("@TRAVELER:ID")
        }, 5000);
      }
    }
    if (token && userID) {
      autoLog();
    }
  }, []);

  const userLogout = () => {
    localStorage.removeItem("@TRAVELER:TOKEN")
    localStorage.removeItem("@TRAVELER:ID")

    toast.success("Você saiu da aplicação, e será redirecionado para fazer login !", {
      iconTheme: {
        primary: "#1d46ce",
        secondary: "#ffffff"
      },
    });

    setTimeout(() => {
      navigate("/");
    }, 3000);
  }

  return (
    <UserContext.Provider value={{ loading, user, setLoading, userLogin, registerUser, userLogout }}>
      {children}
    </UserContext.Provider>
  )
}
