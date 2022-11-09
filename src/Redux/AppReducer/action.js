import { getRemovable } from "json-server/lib/server/mixins";
import {
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_SUCCESS,
  SEARCH_DATA_FAILURE,
  DELETE_CART_FAILURE,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  GET_COURSE_DATA_FAILURE,
  GET_COURSE_DATA_REQUEST,
  GET_COURSE_DATA_SUCCESS,
  POST_ADDTOCART_FAILURE,
  POST_ADDTOCART_REQUEST,
  POST_ADDTOCART_SUCCESS,
} from "./actionTypes";

const SearchRequest = () => {
  return { type: SEARCH_DATA_REQUEST };
};
const SearchSuccess = (payload) => {
  console.log("datachecking:", payload);
  return { type: SEARCH_DATA_SUCCESS, payload };
};
const SearchFailure = () => {
  return { type: SEARCH_DATA_FAILURE };
};
const getCourseRequest = () => {
  return { type: GET_COURSE_DATA_REQUEST };
};
const getCourseSuccess = () => {
  return { type: GET_COURSE_DATA_SUCCESS };
};
const getCourseFailure = () => {
  return { type: GET_COURSE_DATA_FAILURE };
};
const postCourseRequest = () => {
  return { type: POST_ADDTOCART_REQUEST };
};
const postCourseSuccess = () => {
  return { type: POST_ADDTOCART_SUCCESS };
};
const postCourseFailure = () => {
  return { type: POST_ADDTOCART_FAILURE };
};
const deleteCartRequest = () => {
  return { type: DELETE_CART_REQUEST };
};
const deleteCartSuccess = () => {
  return { type: DELETE_CART_SUCCESS };
};
const deleteCartFailure = () => {
  return { type: DELETE_CART_FAILURE };
};

export {
  SearchRequest,
  SearchSuccess,
  SearchFailure,
  getCourseRequest,
  getCourseSuccess,
  getCourseFailure,
  postCourseRequest,
  postCourseSuccess,
  postCourseFailure,
  deleteCartRequest,
  deleteCartSuccess,
  deleteCartFailure,
};
