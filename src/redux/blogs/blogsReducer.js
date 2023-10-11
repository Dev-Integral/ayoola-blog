import { GET_BLOGS_FAILURE, GET_BLOGS_START, GET_BLOGS_SUCCESS } from "./type";

const initialState = {
  isLoadingBlogs: true,
  blogsData: {},
};

export default function feesReducer(state = initialState, action) {
  switch (action.type) {
    //GET CHECKOUT FEES
    case GET_BLOGS_START:
      return { ...state, isLoadingBlogs: true };
    case GET_BLOGS_SUCCESS:
      return { ...state, isLoadingBlogs: false, blogsData: action.payload };
    case GET_BLOGS_FAILURE:
      return { ...state, isLoadingBlogs: false, blogsData: []}
    default:
      return { ...state };
  }
}
