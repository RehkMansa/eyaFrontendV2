import { useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./assets/styles/global.";
import AppContext from "./context/AppContext";
import { orderedComment } from "./firebase/methods";
import { useSnapshot } from "./hooks";
import AllRoutes from "./routes/routes";

const App = () => {
    const comments = useSnapshot(orderedComment);
    const provider = useMemo(() => ({ comments }), [comments]);

    return (
        <BrowserRouter>
            <GlobalStyles />
            <AppContext.Provider value={provider}>
                <AllRoutes />
            </AppContext.Provider>
        </BrowserRouter>
    );
};

export default App;
