import { TravelProvider } from "./providers/TravelContext";
import { UserProvider } from "./providers/UserContext";
import RoutesMain from "./routes/routes";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <TravelProvider>
          <RoutesMain />
        </TravelProvider>
      </UserProvider>
    </>
  );
}

export default App;
