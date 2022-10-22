import { createContext } from "react";

const CommentsContext = createContext<{ [x: string]: string }[]>([]);

export default CommentsContext;
