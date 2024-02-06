import { Fragment, useEffect, useState } from "react";
import Pagination from "../component/Pagination";
import { getBlogs } from "../redux/blogs/blogsActions";
import { useDispatch } from "react-redux";
import useBlog from "../hooks/useBlog";
import * as dfn from "date-fns";
import { useNavigate } from "react-router-dom";
import { getAuth } from "../redux/hadid/auth/authActions";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const dispatch = useDispatch();
  const { blogsData } = useBlog();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBlogs({ itemsPerPage, currentPage }));
    dispatch(getAuth())
  }, [itemsPerPage, currentPage, dispatch]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Fragment>
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
        {blogsData?.data?.map((blog, key) => (
          <div key={key} className="drop-shadow border">
            <img src={blog?.image} alt="blog" />
            <div className="p-3 text-sm text-slate-950">
              <p className="mt-2 mb-1 flex gap-2 items-center">
                <span className="font-bold">Tags:</span> <span className="flex gap-2">{blog?.tags?.map((tag_name, index)=> <span key={index} className="rounded bg-sky-200 text-slate-900 p-1">{tag_name}</span>)}</span>
              </p>
              <p className="">
                <span className="font-bold">Title</span>:{" "}
                <span className="">{blog?.text}</span>
              </p>
              <p>Time: {blog?.publishDate ? dfn.formatRFC7231(dfn.parse(blog?.publishDate?.split("T")[0], "yyyy-MM-dd", new Date()), "dd MM, yyyy") : ''}</p>
              <p className="cursor-pointer text-gray-50 bg-blue-500 text-center rounded mt-4 p-2" onClick={()=> navigate(`/details/${blog?.id}`)}>Learn more</p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-[80vw] lg:max-w-[70vw] mx-auto py-4">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={blogsData?.total}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Fragment>
  );
};

export default Home;
