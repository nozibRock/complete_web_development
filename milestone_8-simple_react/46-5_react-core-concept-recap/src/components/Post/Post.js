import React from "react";
import "./Post.css";

const Post = (props) => {
  const { heading, body, imgUrl, author } = props.post;
  const titleStyle = {
    height: "126px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  };
  return (
    <div className="post-container">
      <article>
        <h2 style={titleStyle}>{heading}</h2>
        <img className="image" src={imgUrl} alt="post" />
        <p>{body}</p>
        <div className="info">
          <h4>Written by: {author}</h4>
        </div>
      </article>
    </div>
  );
};

export default Post;
