import { createContext } from "react";

const CommentsContext = createContext<{ [x: string]: any }[]>([]);

export default CommentsContext;
