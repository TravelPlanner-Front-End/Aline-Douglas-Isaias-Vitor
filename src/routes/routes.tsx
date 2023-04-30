import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import { HomePage } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />}  />
      <Route path="/home" element={<HomePage />}  />
      <Route path="*" element={<NotFound />}>
      </Route>
    </Routes>
  );
};

export default RoutesMain;
    
  
  