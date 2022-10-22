import { createContext } from "react";

const PropertiesContext = createContext<{ [x: string]: any }>([]);

export default PropertiesContext;
