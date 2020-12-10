import { addNewUser, sighUp } from "../../../../services/auth.service";
import { GET_USER } from "../types/user.types";
import firebase from "firebase";

export const setUser = (payload) => ({
  type: GET_USER,
  payload,
});

export const signUp = (data) => (dispatch) => {
  const { email, password, name } = data;
  firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then((user) => {
      console.log(user);

      const dataToSave = {
        isAdmin: false,
        isBandAdmin: false,
        isVerified: true,
        name,
        email,
      };

      const currentUser = firebase.auth().currentUser;

      addNewUser(dataToSave, currentUser.uid).then(() =>
        dispatch(
          setUser({
            ...dataToSave,
          })
        )
      );
    });
};
