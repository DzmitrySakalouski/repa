import firebase from "firebase/app";

export const getPersonalDataDoc = uid => {
    const db = firebase.firestore();
    return db.collection("users").doc(uid);
};