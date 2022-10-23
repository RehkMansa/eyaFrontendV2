import { createContext } from "react";

const AppContext = createContext<{ comments: {}[] }>({
    comments: [],
});

export default AppContext;
