import { addNewUser, logOut, sighUp } from "../../../../services/auth.service";
import { GET_USER, SET_UID } from "../types/user.types";
import firebase from "firebase";
import { getPersonalDataDoc } from "../../../../services/user.service";

export const setUser = (payload) => ({
  type: GET_USER,
  payload,
});

export const setUID = (payload) => ({
  type: SET_UID,
  payload,
});

export const signUp = (data) => (dispatch) => {
  const { email, password, name } = data;
  firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then((user) => {
      console.log(user);

      const currentUser = firebase.auth().currentUser;

      const dataToSave = {
        isAdmin: false,
        isBandAdmin: false,
        isVerified: true,
        name,
        email,
        uid: currentUser.uid,
      };

      addNewUser(dataToSave, currentUser.uid).then(() =>
        dispatch(
          setUser({
            ...dataToSave,
          })
        )
      );
    });
};

export const getUserPersonalData = (uid) => (dispatch) => {
  const userDoc = getPersonalDataDoc(uid);
  userDoc.get().then((doc) => {
    if (doc.exists) {
      dispatch(setUser(({...doc.data(), uid: doc.id})));
    } else {
      console.log("ERRoR");
    }
  });
};

export const signOut = () => dispatch => {
  logOut().then(() => {
    dispatch(setUser({}));
  })
}
