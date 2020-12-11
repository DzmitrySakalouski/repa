import firebase from "firebase";

export const logIn = (data) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(data.email, data.password)
    .then((user) => {
      console.log(user);
    });
};

export const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("SIGN_OUT");
    });
};

export const addNewUser = userData => {
  const db = firebase.firestore();

  return db
    .collection("users")
    .doc(userData.uid)
    .set({
      ...userData,
    });
};
