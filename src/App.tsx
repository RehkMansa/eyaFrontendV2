import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./assets/styles/global.";
import AllRoutes from "./routes/routes";

const App = () => (
    <BrowserRouter>
        <GlobalStyles />
        <AllRoutes />
    </BrowserRouter>
);

export default App;
