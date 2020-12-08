import { GET_USER } from "../types/user.types";

export const getUser = payload => ({
    type: GET_USER,
    payload,
});