import React from 'react';
import './Post.css'

const Post = (props) => {
    const { title, body, imgUrl, author } = props.post;
    return (
      <div className="post-container">
        <h2>{title}</h2>
        <img className="image" src={imgUrl} alt="post" />
        <p>{body}</p>
        <div className="info">
          <h4>Written by: {author}</h4>
        </div>
      </div>
    );
};

export default Post;