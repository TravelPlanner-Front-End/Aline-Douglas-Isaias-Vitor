import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { TravelProvider } from "../../providers/TravelContext";
import { UserContext } from "../../providers/UserContext";

export const ProtectedRoutes: any = () => {
  const { user } = useContext(UserContext);
  return user ? (
    <TravelProvider>
      <Outlet />
    </TravelProvider>
  ) : (
    <Navigate to="/" />
  );
};
