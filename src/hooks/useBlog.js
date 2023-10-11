import { useSelector } from "react-redux";

const useBlog = () => {
  const blog = useSelector((state) => state.blog);
  
  let { isLoadingBlogs, blogsData } = blog;

  return {
    isLoadingBlogs, blogsData
  };
};

export default useBlog;
