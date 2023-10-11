import React from "react";
import ab_logo from "../assets/logo.png";
import { BsGithub } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="w-full text-white bg-sky-500 pb-4 pt-4 pl-8 pr-8 flex flex-col md:flex-row justify-between">
      <button className="flex items-center gap-3 border" onClick={()=> window.open("/home", "_self")}>
        <img width={60} src={ab_logo} alt="Ayoola Blog" />
        <span className="font-bold text-xl pr-1">Ayoola's Blog</span>
      </button>
      <button className="flex items-center gap-3" onClick={()=>window.open("https://github.com/Dev-Integral/ayoola-blog", "_blank")}>
        <BsGithub /> Link to source code
      </button>
    </div>
  );
};

export default Nav;
