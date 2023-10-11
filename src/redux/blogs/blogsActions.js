import Axios from "../../api/connection";
import { toast } from "react-toastify";

import {
  GET_BLOGS_FAILURE,
  GET_BLOGS_START,
  GET_BLOGS_SUCCESS,
  GET_SINGLE_BLOG_FAILURE,
  GET_SINGLE_BLOG_START,
  GET_SINGLE_BLOG_SUCCESS,
} from "./type";
export const getBlogs = (payload) => {
  return (dispatch) => {
    dispatch({ type: GET_BLOGS_START });
    Axios.get(
      `/post?limit=${payload?.itemsPerPage}&page=${payload?.currentPage}`
    )
      .then((res) => {
        dispatch({ type: GET_BLOGS_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: GET_BLOGS_FAILURE, payload: error });
      });
  };
};

export const getSingleBlog = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_SINGLE_BLOG_START });
    Axios.get(`/post/${id}`)
      .then((res) => {
        dispatch({ type: GET_SINGLE_BLOG_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: GET_SINGLE_BLOG_FAILURE, payload: error });
      });
  };
};

export const deleteBlog = (id, closeModal = () => {}) => {
  return (dispatch) => {
    dispatch({ type: GET_SINGLE_BLOG_START });
    Axios.delete(`/post/${id}`)
      .then((res) => {
        dispatch({ type: GET_SINGLE_BLOG_SUCCESS, payload: res.data });
        toast("Post deleted successfully");
        closeModal();
      })
      .catch((error) => {
        dispatch({ type: GET_SINGLE_BLOG_FAILURE, payload: error });
      });
  };
};
