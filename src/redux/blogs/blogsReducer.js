import {
  GET_BLOGS_FAILURE,
  GET_BLOGS_START,
  GET_BLOGS_SUCCESS,
  GET_SINGLE_BLOG_FAILURE,
  GET_SINGLE_BLOG_START,
  GET_SINGLE_BLOG_SUCCESS,
} from "./type";

const initialState = {
  isLoadingBlogs: false,
  isLoadingABlog: false,
  blogsData: {},
  blogDetails: {},
};

export default function blogsReducer(state = initialState, action) {
  switch (action.type) {
    // MANAGE BLOG LIST STATE
    case GET_BLOGS_START:
      return { ...state, isLoadingBlogs: true, blogsData: [] };
    case GET_BLOGS_SUCCESS:
      return { ...state, isLoadingBlogs: false, blogsData: action.payload };
    case GET_BLOGS_FAILURE:
      return { ...state, isLoadingBlogs: false, blogsData: [] };
    case GET_SINGLE_BLOG_START:
      return { ...state, isLoadingABlog: true, blogDetails: {} };
    // MANAGE BLOG DETAILS STATE
    case GET_SINGLE_BLOG_SUCCESS:
      return { ...state, isLoadingABlog: false, blogDetails: action.payload };
    case GET_SINGLE_BLOG_FAILURE:
      return { ...state, isLoadingABlog: false, blogDetails: {} };
    // RETURN DEFAULT
    default:
      return { ...state };
  }
}
