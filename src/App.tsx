import { ResetCSS } from "./styles/ResetCSS";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./providers/UserContext";
import RoutesMain from "./routes/routes";

const App = () => {
  return (
    <>
      <ResetCSS />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
      <Toaster position="top-right" reverseOrder={false} toastOptions={{ duration: 3500 }}/>
    </>
  );
};

export default App;
