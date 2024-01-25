import React, { useState } from "react";

const PostForm = ({ onNewPost }) => {
  const [textPost, setTextPost] = useState("");

  const postText = () => {
    fetch(
      "https://b-base-fce24-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
      {
        method: "POST",
        body: JSON.stringify({
          text: textPost,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(
      onNewPost(textPost),
      setTextPost("")
    );
  };


  return (
    <>
      <form >
        <input
          type="text"
          value={textPost}
          placeholder="Введите ваше сообщение..."
          onChange={(e) => setTextPost(e.target.value)}
        />
        <button onClick={(postText)} disabled={!textPost}>
          отправить
        </button>
      </form>
    </>
  );
};

export default PostForm;
