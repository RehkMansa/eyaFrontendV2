import { DocumentData, onSnapshot, Query } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useSnapshot = (ref: Query<DocumentData>) => {
    const [value, setValue] = useState<{}[]>([]);

    useEffect(() => {
        onSnapshot(ref, snap => {
            const newArr = snap.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setValue(newArr);
            console.count("background updates");
        });
    }, [ref]);

    return value;
};
