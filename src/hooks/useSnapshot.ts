import { DocumentData, onSnapshot, Query } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useSnapshot = (ref: Query<DocumentData>) => {
    const [value, setValue] = useState<{}[]>([]);
    console.log("rendered");
    useEffect(() => {
        onSnapshot(ref, snap => {
            const newArr = snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setValue(newArr);
        });
    }, [ref]);

    return value;
};
