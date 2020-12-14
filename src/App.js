import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);

  // useEffect runs a piece of code based on a specific condition

  useEffect(() => {
    //this is where the code runs
    db.collection("posts").onSnapshot((snapshot) => {
      // every time a new post is added this code fires
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  //the brackets mean only run this once then stop

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
