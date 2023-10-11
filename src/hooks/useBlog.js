import { useSelector } from "react-redux";

const useBlog = () => {
  const blog = useSelector((state) => state.blog);
  
  let { isLoadingBlogs, blogsData, isLoadingABlog, blogDetails } = blog;

  return {
    isLoadingBlogs, blogsData, isLoadingABlog, blogDetails
  };
};

export default useBlog;
