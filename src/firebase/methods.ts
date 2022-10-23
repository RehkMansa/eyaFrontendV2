/* eslint-disable @typescript-eslint/no-explicit-any */
import { addDoc, collection, orderBy, query, serverTimestamp } from "firebase/firestore";
import { COMMENTS, PROPERTIES } from "../constants";
import { db } from "./config";

const colRef = (name: string) => collection(db, name);

export const commentRef = colRef(COMMENTS);
export const propertiesRef = colRef(PROPERTIES);

const trimMessage = (err: any): string => err.message.replace("Firebase: ", "");

export const orderedComment = query(commentRef, orderBy("createdAt"));
export const orderedProperties = query(propertiesRef, orderBy("createdAt"));

export const addDocument = async (name: string, payload: { [x: string]: any }) => {
    const ref = colRef(name);

    try {
        const data = {
            ...payload,
            createdAt: serverTimestamp(),
        };

        await addDoc(ref, data);
    } catch (err: any) {
        const error = trimMessage(err);
        throw new Error(error);
    }
};
