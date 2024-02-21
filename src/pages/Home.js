import { Fragment, useEffect, useState } from "react";
// import Pagination from "../component/Pagination";
import { getBlogList } from "../redux/blogs/blogsActions";
import { useDispatch } from "react-redux";
import useBlog from "../hooks/useBlog";
import * as dfn from "date-fns";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [itemsPerPage] = useState(9);
  const dispatch = useDispatch();
  const { blogsData } = useBlog();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBlogList(limit));
  }, [itemsPerPage, currentPage, dispatch]);

  // const handlePageChange = (newPage) => {
  //   setCurrentPage(newPage);
  // };

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
      <div className="max-w-[90vw] lg:max-w-[80vw] mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 ">
        {blogsData?.items?.map((blog, key) => (
          <div key={key} className="drop-shadow border">
            <img
              src={
                blog?.fields?.shareImages?.length > 0
                  ? blog?.fields?.shareImages[0]?.fields?.file?.url
                  : ""
              }
              alt="blog"
            />
            <div className="p-3 text-sm text-slate-950 relative mb-12">
              <p className="">
                <span className="font-bold">Title</span>:{" "}
                <span className="">{blog?.fields.title}</span>
              </p>
              <p className="">
                <span className="font-bold">Summary</span>:{" "}
                <span className="">{blog?.fields.summary}...</span>
              </p>
              <p>
                Time:{" "}
                {blog?.fields?.createdAt
                  ? dfn.formatRFC7231(
                      dfn.parse(
                        blog?.sys?.createdAt?.split("T")[0],
                        "yyyy-MM-dd",
                        new Date()
                      ),
                      "dd MM, yyyy"
                    )
                  : ""}
              </p>
              <div className="absolute -bottom-12 w-full">
                <p className="mt-6 w-full flex justify-center">
                  <button
                    onClick={() => navigate(`/details/${blog?.sys?.id}?imageId=${blog?.fields?.banner?.sys?.id}`)}
                    className="text-gray-50 bg-blue-500 text-center rounded mt-4 mb-4 pl-4 pr-4 p-2"
                  >
                    Learn more
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-[80vw] lg:max-w-[70vw] mx-auto py-4">
        {/* <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={blogsData?.items.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        /> */}
      </div>
    </Fragment>
  );
};

export default Home;
