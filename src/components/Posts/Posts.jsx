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
          result.push({ id: key, text: data[key].text });
        }
        setPosts(result);
      });
  };

  useEffect(() => {
    getText();
  }, [posts]);

  return (
    <div>
      {posts.map((item) => (
        <div key={item.id}>{item.text}</div>
      ))}
    </div>
  );
};

export default Posts;
