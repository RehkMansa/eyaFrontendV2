import { onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./assets/styles/global.";
import CommentsContext from "./context/CommentsContext";
import AllRoutes from "./routes/routes";

const App = () => {
    const [comments, setComments] = useState<{ [x: string]: string }[]>([]);

    useEffect(() => {
        onSnapshot(ref);
    }, []);

    return (
        <BrowserRouter>
            <GlobalStyles />
            <CommentsContext.Provider value={comments}>
                <AllRoutes />
            </CommentsContext.Provider>
        </BrowserRouter>
    );
};

export default App;
