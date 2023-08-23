import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyD-v3V18VVK1puIk6XQ0oUS4xDIFjPXbLA",
    authDomain: "dinemarketplace-97a50.firebaseapp.com",
    projectId: "dinemarketplace-97a50",
    storageBucket: "dinemarketplace-97a50.appspot.com",
    messagingSenderId: "472128041599",
    appId: "1:472128041599:web:48578df5a13edf8fdf854a"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
  
export const auth = getAuth()


