import { UserProvider } from "./providers/UserContext";
import RoutesMain from "./routes/routes";

function App() {

return (
  <UserProvider>
    <RoutesMain />
  </UserProvider>
)
}

export default App;
