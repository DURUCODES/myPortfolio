import React from "react";
import html from "../assets/image/html.png";
import css from "../assets/image/css.png";
import js from "../assets/image/js.png";
import tx from "../assets/image/tx.png";
import react from "../assets/image/react.png";
import tailwind from "../assets/image/tailwind.png";
import nextjs from "../assets/image/nextjs.png";
import redux from "../assets/image/redux.png";
import git from "../assets/image/git.png";
import github from "../assets/image/github.png";
import mtu from "../assets/image/mtu.jpg";
import postman from "../assets/image/postman.png";
import vscode from "../assets/image/vscode.png";

const Resume = () => {
  return (
    <div>
      <div></div>
      <div>
        <h1 className="text-2xl font-bold"> Skills/Tools</h1>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 ">
          <img src={html} className="h-20 cursor-pointer" />
          <img src={css} className="h-20 cursor-pointer" />
          <img src={js} className="h-20 cursor-pointer" />
          <img src={tx} className="h-20 cursor-pointer" />
          <img src={react} className="h-20 cursor-pointer" />
          <img src={tailwind} className="h-20 cursor-pointer" />
          <img src={mtu} className="h-20 cursor-pointer" />
          <img src={nextjs} className="h-20 cursor-pointer" />
          <img src={redux} className="h-20 cursor-pointer" />
          <img src={github} className="h-20 cursor-pointer" />
          <img src={git} className="h-20 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Resume;
