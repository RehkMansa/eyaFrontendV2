/* eslint-disable react/jsx-no-constructed-context-values */
import { getDocs } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./assets/styles/global.";
import PreLoader from "./components/elements/PreLoader";
import AppContext from "./context/AppContext";
import { orderedComment, orderedProperties } from "./firebase/methods";
import { useSnapshot } from "./hooks";
import AllRoutes from "./routes/routes";

const App = () => {
    const [properties, setProperties] = useState<{}[]>([]);
    const comments = useSnapshot(orderedComment);
    const provider = useMemo(() => ({ comments, properties }), [comments, properties]);

    const getProperties = async () => {
        const data: {}[] = [];

        try {
            const res = await getDocs(orderedProperties);
            res.forEach(docs => {
                data.push({
                    id: docs.id,
                    ...docs.data(),
                });
            });

            setProperties(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProperties();
        console.count("rendered");
    }, []);

    return (
        <BrowserRouter>
            <GlobalStyles />
            <AppContext.Provider value={provider}>
                {properties.length < 1 ? <PreLoader /> : <AllRoutes />}
            </AppContext.Provider>
        </BrowserRouter>
    );
};

export default App;
