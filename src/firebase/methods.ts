/* eslint-disable @typescript-eslint/no-explicit-any */
import { addDoc, collection, orderBy, query, serverTimestamp } from "firebase/firestore";
import { COMMENTS } from "../constants";
import { db } from "./config";

const colRef = (name: string) => collection(db, name);

const commentRef = colRef(COMMENTS);

const trimMessage = (err: any): string => err.message.replace("Firebase: ", "");

export const orderQuery = query(commentRef, orderBy("createdAt"));

export const addDocument = (name: string, payload: { [x: string]: any }) => {
    const ref = colRef(name);

    try {
        const data = {
            ...payload,
            createdAt: serverTimestamp(),
        };

        addDoc(ref, data);
    } catch (err: any) {
        const error = trimMessage(err);
        throw new Error(error);
    }
};
