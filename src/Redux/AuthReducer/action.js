import axios from "axios";
import * as types from "./actiontype";

const postuserloginrequest = () => {
  return {
    type: types.USER_LOGIN_REQUEST,
  };
};
const postuserloginsucess = (payload) => {
  return {
    type: types.USER_LOGIN_SUCCESS,
    payload,
  };
};
const postuserloginfailure = () => {
  return {
    type: types.USER_LOGIN_FAILURE,
  };
};
export { postuserloginrequest, postuserloginsucess, postuserloginfailure };
