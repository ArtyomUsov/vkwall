import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getText = () => {
    fetch(
      "https://b-base-fce24-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const result = [];
        for (const key in data) {
          result.push({
            id: key,
            text: data[key].text,
            userName: data[key].userName,
            url: data[key].url,
            likes: data[key].likes,
            time: data[key].time,
          });
        }
        setPosts(result);
      });
  };

  useEffect(() => {
    getText();
  }, [posts]);

  return (
    <div className="post-container">
      {posts.map((item) => (
        <div key={item.id} className="post">
          <div>
            <img className="post-image" src={item.url} alt="avatar" />
            <h6 className="time">{item.time}</h6>
          </div>
          <div className="relative">
            <h3 className="post-author">{item.userName}</h3>
            <p className="post-text">{item.text}</p>
            <h5 className="likes">likes {item.likes}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
