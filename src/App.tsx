import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./assets/styles/global.";
import CommentsContext from "./context/CommentsContext";
import PropertiesContext from "./context/PropertiesContext";
import { commentRef } from "./firebase/methods";
import AllRoutes from "./routes/routes";

const App = () => {
    const [comments, setComments] = useState<{ [x: string]: string }[]>([]);
    const [properties, setProperties] = useState<{ [x: string]: any }>([]);

    useEffect(() => {
        onSnapshot(commentRef, snap => {
            const newArr = snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            setComments(newArr);
        });
    }, []);

    useEffect(() => {
        onSnapshot(commentRef, snap => {
            const newArr = snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            setProperties(newArr);
        });
    }, []);

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
