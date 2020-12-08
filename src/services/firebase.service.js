import firebase from "firebase/app";
import { firebaseConfig } from "../constants/firebase.constants";

export const initApp = () => firebase.initializeApp(firebaseConfig)