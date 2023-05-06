import { ResetCSS } from "./styles/ResetCSS";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./providers/UserContext";
import RoutesMain from "./routes/routes";

const App = () => {
  return (
    <>
      <ResetCSS />
      <GlobalStyles />
      <UserProvider>
          <RoutesMain />
      </UserProvider>
      <Toaster position="top-right" reverseOrder={false} toastOptions={{ duration: 3500 }}/>
    </>
  );
};

export default App;
