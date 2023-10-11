import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Pagination from "../component/Pagination";
import { getBlogs } from "../redux/blogs/blogsActions";
import { useDispatch } from "react-redux";

const Home = () => {
  const [blogPosts, setBlogPost] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
    // axios
    //   .get(
    //     `https://dummyapi.io/data/v1/post?offset=${offset}&limit=${itemsPerPage}`
    //   )
    //   .then((res) => console.log(res.data)&setBlogPost(res.data))
    //   .catch((error) => console.log(error));
  }, []);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setOffset(newPage === 1 ? 0 : newPage * 10);
  };

  return (
    <Fragment>
      {" "}
      <div className="bg-gray-100">
        <div className="max-w-[80vw] lg:max-w-[70vw] mx-auto flex flex-col items-center gap-2 py-12 ">
          <h1 className="text-3xl font-bold mb-1 text-center">
            Welcome to Ayoola's Blog
          </h1>
          <p className="text-center">
            One stop for News, Events, Entertainment, Lifestyle, Fashion,
            Beauty, Inspiration and yes... Gossip!
          </p>
        </div>
      </div>
      <div className="max-w-[80vw] lg:max-w-[70vw] mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 ">
        {blogPosts?.blogs?.map((blog, key) => (
          <div key={key} className="drop-shadow border">
            <img src={blog?.photo_url} alt="blog" />
            <div className="p-3 text-sm text-slate-950">
              <p className="mt-2 mb-1"><span className="font-bold">Category</span>: {blog?.category}</p>
              <p className=""><span className="font-bold">Title</span>: {blog?.title}</p>
              <p className="">
              <span className="font-bold">Description</span>: <span className="">{blog?.description}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-[80vw] lg:max-w-[70vw] mx-auto py-4">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={blogPosts?.total_blogs}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Fragment>
  );
};

export default Home;
