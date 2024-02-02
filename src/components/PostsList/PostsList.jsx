import React, { useState } from "react";
import Posts from "../Posts/Posts";
import PostForm from "../PostForm/PostForm";

const PostsList = () => {
  const [newPost, setNewPost] = useState("");

  const handleNewPost = (text) => {
    setNewPost(text);
  };

  return (
    <div className="post-container">
      <PostForm onNewPost={handleNewPost} />{" "}
      {/* Передаем функцию обратного вызова в PostForm */}
      <Posts
      // newPost={newPost}
      />{" "}
      {/* Передаем новый пост в компонент Posts| а надо ли? */}
    </div>
  );
};

export default PostsList;
