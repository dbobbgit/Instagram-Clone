import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "danielle_bobb",
      caption: " Catch me outside! How 'bout dat?!",
      imageUrl:
        "https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/17388982_10212388059440447_5735740954338169843_o.jpg?_nc_cat=106&ccb=2&_nc_sid=a4a2d7&_nc_ohc=DbBQlmBG5HAAX9DF847&_nc_ht=scontent-sea1-1.xx&oh=0d1f8f2354409b242ea5cfe514a979ac&oe=5FFDED51",
    },
    {
      username: "john_anderson",
      caption: " I dipped but Danielle still loves me!",
      imageUrl:
        "https://media4.giphy.com/media/3o7ZeEZUzRjyvWuuIg/giphy.webp?cid=ecf05e470xdnt2qwi74ku1at3xigkokys63wxz9yc4tzp2go&rid=giphy.webp",
    },
  ]);

  return (
    <div className="App">
      {/* Header */}

      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <h1>Yo, Danielle! Let's build an Instagram clone! </h1>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}

      {/* Posts */}
    </div>
  );
}

export default App;
