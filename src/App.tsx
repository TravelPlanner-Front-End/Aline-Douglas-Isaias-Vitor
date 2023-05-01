import { ResetCSS } from "./styles/ResetCSS";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Toaster } from "react-hot-toast";
import { TravelProvider } from "./providers/TravelContext";
import { UserProvider } from "./providers/UserContext";
import RoutesMain from "./routes/routes";

const App = () => {
  return (
    <>
      <ResetCSS />
      <GlobalStyles />
      <UserProvider>
        <TravelProvider>
          <RoutesMain />
        </TravelProvider>
      </UserProvider>
      <Toaster position="top-right" reverseOrder={false} toastOptions={{ duration: 3500 }}/>
    </>
  );
};

export default App;
