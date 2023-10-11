import Axios from "../../api/connection";
import { GET_BLOGS_FAILURE, GET_BLOGS_START, GET_BLOGS_SUCCESS } from "./type";

export const getBlogs = (payLoad) => {
    return (dispatch) => {
      dispatch({ type: GET_BLOGS_START});
      Axios.get(`/post`)
      .then((res) => {
        dispatch({ type: GET_BLOGS_SUCCESS, payload:res.data});
      })
      .catch((error) => {
        dispatch({ type: GET_BLOGS_FAILURE, payload: error});
      });
    }
  }
  