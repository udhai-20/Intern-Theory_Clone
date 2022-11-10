import axios from "axios";
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
const getCourseSuccess = (payload) => {
  return { type: GET_COURSE_DATA_SUCCESS, payload };
};
const getCourseFailure = () => {
  return { type: GET_COURSE_DATA_FAILURE };
};
const addToCartRequest = () => {
  return { type: POST_ADDTOCART_REQUEST };
};
const addToCartSuccess = () => {
  return { type: POST_ADDTOCART_SUCCESS };
};
const addToCartFailure = () => {
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
export const getCourses = (dispatch) => {
  dispatch(getCourseRequest());
  return axios
    .get("http://localhost:8080/courses")
    .then((res) => {
      dispatch(res.data);
    })
    .catch((err) => {
      dispatch(getCourseFailure());
    });
};
export const addToCart = (data) => (dispatch) => {
  dispatch(addToCartRequest());
  axios
    .post("http://localhost:8080/cart")
    .then((res) => {
      alert("Item Added To Cart Successfully");
    })
    .catch((err) => {
      alert("Item Allready added");
    });
};
export {
  SearchRequest,
  SearchSuccess,
  SearchFailure,
  getCourseRequest,
  getCourseSuccess,
  getCourseFailure,
  addToCartRequest,
  addToCartSuccess,
  addToCartFailure,
  deleteCartRequest,
  deleteCartSuccess,
  deleteCartFailure,
};
