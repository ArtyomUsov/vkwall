import React, { useEffect, useState } from "react";

const PostForm = ({ onNewPost }) => {
  const [textPost, setTextPost] = useState("");
  const [likes, setLikes] = useState(0);
  const [userName, setUserName] = useState("anonim");
  const [photoUrl, setPhotoUrl] = useState("");
  const [time, setTime] = useState();

  const generateRandomPhotoUrl = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    const randomPhoto = data[Math.floor(Math.random() * data.length)];
    console.log(randomPhoto.url);
    setPhotoUrl(randomPhoto.url);
  };

  const generateRandomUserName = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const randomName = data[Math.floor(Math.random() * data.length)];
    console.log(randomName.username);
    setUserName(randomName.username);
  };

  const getCurrentTime = async () => {
    const now = new Date();
    console.log(now.toLocaleString());
    setTime(now.toLocaleString());
  };

  const postText = async () => {
    await generateRandomUserName().then(
      await generateRandomPhotoUrl().then(
        await getCurrentTime().then(
          fetch(
            "https://b-base-fce24-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
            {
              method: "POST",
              body: JSON.stringify({
                text: textPost,
                likes: likes,
                userName: userName,
                url: photoUrl,
                time: time,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          ).then(onNewPost(textPost), setTextPost(""))
        )
      )
    );
  };

  useEffect(() => {
    generateRandomPhotoUrl();
    generateRandomUserName();
    getCurrentTime();
  }, []);

  return (
    <>
      <form>
        <input
          type="text"
          value={textPost}
          placeholder="Введите ваше сообщение..."
          onChange={(e) => setTextPost(e.target.value)}
        />
        <button onClick={postText} disabled={!textPost}>
          отправить
        </button>
      </form>
    </>
  );
};

export default PostForm;
