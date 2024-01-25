import React, { useEffect, useState } from "react";

const Posts = ({ newPost }) => {
    const [posts, setPosts] = useState([]);

  const getText = () => {
    fetch(
      "https://b-base-fce24-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const result = [];
        for (const key in data) {
          result.push({ id: key, text: data[key].text });
        }
        console.log(result);
        setPosts(result)
      });
  };

  useEffect(() => {
    getText();
  }, [newPost]);

  // useEffect(() => {
  //   if (newPost) {
  //     setPosts(prevPosts => [...prevPosts, { id: Date.now(), text: newPost }]);
  //   }
  // }, [newPost]);

  return <div>{posts.map(item => (<div key={item.id}>{item.text}</div>))}</div>;
};

export default Posts;
