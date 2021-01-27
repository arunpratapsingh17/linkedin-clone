import React from "react";
import "./Post.css";
const Post = ({ name, description, message, photo }) => {
  return (
    <div className="post">
      <Avatar />
    </div>
  );
};

export default Post;
