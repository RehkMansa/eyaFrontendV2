import { createContext } from "react";

const AppContext = createContext<{ comments: {}[]; properties: {}[] }>({
    comments: [],
    properties: [],
});

export default AppContext;
