import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
const Post = ({ name, description, message, photo }) => {
  return (
    <div className="post">
      <div className="post_Header">
        <Avatar />
        <div className="post_info">
          <h2>Jatin Singh</h2>
          <p>Description</p>
        </div>
      </div>
      <div className="post_body">
        <p>The post message goes here!!</p>
      </div>
    </div>
  );
};

export default Post;
