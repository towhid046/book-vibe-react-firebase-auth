import { initializeApp } from "firebase/app";
import { GithubAuthProvider, GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBdtG0_YYvvhs4gUy_udtzAzbwBskgPl5w",
  authDomain: "book-vibe-react-auth.firebaseapp.com",
  projectId: "book-vibe-react-auth",
  storageBucket: "book-vibe-react-auth.appspot.com",
  messagingSenderId: "213986097779",
  appId: "1:213986097779:web:546522734f89d8515c0806"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const githubProvider = new GithubAuthProvider()