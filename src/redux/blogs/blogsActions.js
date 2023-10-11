import Axios from "../../api/connection";
import { GET_BLOGS_FAILURE, GET_BLOGS_START, GET_BLOGS_SUCCESS } from "./type";

export const getBlogs = (payload) => {
    return (dispatch) => {
      dispatch({ type: GET_BLOGS_START});
      Axios.get(`/post?limit=${payload?.itemsPerPage}&page=${payload?.currentPage}`)
      .then((res) => {
        dispatch({ type: GET_BLOGS_SUCCESS, payload:res.data});
      })
      .catch((error) => {
        dispatch({ type: GET_BLOGS_FAILURE, payload: error});
      });
    }
  }
  