import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./assets/styles/global.";
import CommentsContext from "./context/CommentsContext";
import PropertiesContext from "./context/PropertiesContext";
import { orderedProperties, orderedComment } from "./firebase/methods";
import { useSnapshot } from "./hooks";
import AllRoutes from "./routes/routes";

const App = () => {
    const comments = useSnapshot(orderedComment);

    const properties = useSnapshot(orderedProperties);

    return (
        <BrowserRouter>
            <GlobalStyles />
            <CommentsContext.Provider value={comments}>
                <PropertiesContext.Provider value={properties}>
                    <AllRoutes />
                </PropertiesContext.Provider>
            </CommentsContext.Provider>
        </BrowserRouter>
    );
};

export default App;
