import React, { useState } from "react";
import Posts from "../Posts/Posts";
import PostForm from "../PostForm/PostForm";

const PostsList = () => {
  const [newPost, setNewPost] = useState(""); // Состояние для хранения нового поста

  const handleNewPost = (text) => {
    setNewPost(text);
    console.log(text); // Обновляем состояние нового поста
  };

  return (
    <div className="post-container">
      <PostForm onNewPost={handleNewPost} /> {/* Передаем функцию обратного вызова в PostForm */}
      <Posts newPost={newPost} /> {/* Передаем новый пост в компонент Posts */}
    </div>
  );
};

export default PostsList;

