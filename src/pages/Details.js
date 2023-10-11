import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSingleBlog } from "../redux/blogs/blogsActions";
import useBlog from "../hooks/useBlog";

const Details = ()=> {
    const dispatch = useDispatch();
    const location = useLocation();
    const id = location?.pathname?.split("/")[2];
    const {blogDetails} = useBlog();

    useEffect(()=>{
        dispatch(getSingleBlog(id));
    }, [])
    
    return (
    <Fragment>
{/* {console.log(blogDetails)} */}

    </Fragment>
    )
}

export default Details;