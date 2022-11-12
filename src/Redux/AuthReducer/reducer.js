import React from "react";
import * as types from "./actionType";
const initial = {
  isAuth: false,
  token: "",
  isAuthLoading: false,
  isAuthError: false,
};
export const reducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
        isAuthLoading: true,
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthLoading: false,
        token: payload,
        isAuth: true,
      };
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
        isAuthError: true,
        isAuth: false,
        token: "",
        isAuthLoading: false,
      };

    default:
      return state;
  }
};
