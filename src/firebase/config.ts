import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC5-_GwQ6QNBcpXy2uGuYH5aEIG--E4Gqc",

    authDomain: "eya-admin.firebaseapp.com",

    projectId: "eya-admin",

    storageBucket: "eya-admin.appspot.com",

    messagingSenderId: "983819589939",

    appId: "1:983819589939:web:6f1caff153320a10c4c646",

    measurementId: "G-YXQBYFRM4E",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
