"use client";

import PostForm from "@/components/Posts/PostForm";
import TopSide from "@/components/TopSIde";
import Head from "next/head";
import '@/style/page.css'
import OptionForm from "@/components/Posts/OptionForm";
import OtherPosts from "@/components/Posts/OtherPosts";
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  
  return (
    <div>
      <TopSide label="Home" />
      <div id="TopPG">
        <div id="PG1">
          <div id="PIMG1">
            <img id="Img1" src="https://i.pinimg.com/564x/c2/79/4e/c2794e4501706193fddcbb53b719ff4b.jpg"></img>
          </div>
          <form id="PGF">
            <div id="PGD2">
              <div id="PGD1">
                <PostForm />
                <input type="text" id="PGIP1" placeholder="What happened?"></input>
                <OptionForm />
              </div>
              <div id="PGD3">
                <OtherPosts />
                <button id="PGFButton" type="submit">POST</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
