import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "reactuilibrary.firebaseapp.com",
  projectId: "reactuilibrary",
  storageBucket: "reactuilibrary.firebasestorage.app",
  messagingSenderId: "874131019890",
  appId: "1:874131019890:web:a5ec9e5957315f2e108aeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}