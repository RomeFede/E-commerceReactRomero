import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "reactromero-5a2d4.firebaseapp.com",
  projectId: "reactromero-5a2d4",
  storageBucket: "reactromero-5a2d4.appspot.com",
  messagingSenderId: "461009914345",
  appId: "1:461009914345:web:bc888718a06831aace6378"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

