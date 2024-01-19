import React from "react";
import Posts from "../Posts/Posts";
import PostForm from "../PostForm/PostForm";
import Header from "../Header/Header";

const PostsList = () => {
  return (
    <div>
      <Header/>
      <Posts />
      <PostForm />
    </div>
  );
};

export default PostsList;
