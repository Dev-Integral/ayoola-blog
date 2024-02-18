import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getSingleBlogContentful } from "../redux/blogs/blogsActions";
import useBlog from "../hooks/useBlog";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import {
  MdOutlineDeleteSweep,
  MdEditCalendar,
  MdOutlineNewLabel,
} from "react-icons/md";
import * as dfn from "date-fns";
import DeleteModal from "../component/DeleteModal";

const Details = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const id = location?.pathname?.split("/")[2];
  const { blogDetails } = useBlog();
  const [toggler, setToggler] = useState(false);
  const [deleteModal, toggleDeleteModal] = useState(false);

  useEffect(() => {
    dispatch(getSingleBlogContentful(id));
  }, [id, dispatch]);

  return (
    <Fragment>
      <div className="bg-gray-100">
        {console.log(blogDetails)}
        <div className="max-w-[80vw] lg:max-w-[70vw] mx-auto flex justify-between items-center py-6">
          <div className="capitalize flex flex-col md:flex-row gap-3">
            <div className="w-20">
              <img
                src={blogDetails?.owner?.picture}
                className="rounded-full"
                alt="post owner"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div>
              <p>
                <span className="font-bold">Author:</span>{" "}
                Ayoola Taiwo
              </p>
              <p>
                <span className="font-bold">Created at:</span>{" "}
                {blogDetails?.sys?.createdAt
                  ? dfn.formatRFC7231(
                      dfn.parse(
                        blogDetails?.sys?.createdAt?.split("T")[0],
                        "yyyy-MM-dd",
                        new Date()
                      ),
                      "dd MM, yyyy"
                    )
                  : ""}
              </p>
              <p className="mt-2 mb-1 flex gap-2 items-center">
                <span className="font-bold">Topic:</span>{" "}
                <span className="flex gap-2">
                  {blogDetails?.fields?.internalName}
                </span>
              </p>
            </div>
          </div>
          <div className="relative">
            <BsThreeDotsVertical
              className="cursor-pointer"
              onClick={() => setToggler(!toggler)}
            />
            {toggler && (
              <div className="drop-shadow bg-white absolute right-2 gap-2 w-40 z-10">
                <p
                  className="p-2 hover:bg-sky-500 hover:text-white active:bg-violet-700 cursor-pointer flex items-center gap-2"
                  onClick={() => setToggler(!toggler)&navigate(`/edit/post/${id}`)}
                >
                  Edit <MdEditCalendar />
                </p>
                <p className="p-2 hover:bg-sky-500 text-red-700 hover:text-red active:bg-violet-700 cursor-pointer flex items-center gap-2"
                onClick={() => setToggler(!toggler)&toggleDeleteModal(!deleteModal)}>
                  Delete <MdOutlineDeleteSweep />
                </p>
                <p className="p-2 hover:bg-sky-500 hover:text-white active:bg-violet-700 cursor-pointer flex items-center gap-2"
                onClick={() => setToggler(!toggler)&navigate(`/new/post/${id}`)}>
                  New <MdOutlineNewLabel />
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-white drop-shadow py-12">
        <div className="max-w-[90vw] lg:max-w-[80vw] mx-auto py-6 grid sm:grid-cols-2 md:grid-cols-2">
          <div className="bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url('${blogDetails?.image}')` }}></div>

          <div className="border p-4">
            <h1 className="uppercase font-bold text-3xl">
              {blogDetails?.text}
            </h1>
            <p>
              Gas free necessary lawyer. Most value economic identify one free.
              Speech store key edge he.\nDraw relationship green court\nNearly
              student describe test range Republican home. Take we approach
              today even forward decade might. Nearly student describe test
              range Republican home. Take we approach today even forward decade
              might. Nearly student describe test range Republican home. Take we
              approach today even forward decade might.\nParticipant garden
              above student. Investment possible community claim party tree
              doctor. Billion bad Republican turn.
              <br/> <br />
              Gas free necessary lawyer. Most value economic identify one free.
              Speech store key edge he.\nDraw relationship green court\nNearly
              student describe test range Republican home. Take we approach
              today even forward decade might. Nearly student describe test
              range Republican home. Take we approach today even forward decade
              might. Nearly student describe test range Republican home. Take we
              approach today even forward decade might.\nParticipant garden
              above student. Investment possible community claim party tree
              doctor. Billion bad Republican turn.
            </p>
            <p className="flex gap-1 mt-4 items-center">
              <span>Likes: {blogDetails?.likes}</span>
              <FcLike />
            </p>
          </div>
        </div>
      </div>
      <DeleteModal isOpen={deleteModal} setIsOpen={toggleDeleteModal} id={id} />
    </Fragment>
  );
};

export default Details;
