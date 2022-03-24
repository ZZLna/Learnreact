import React from 'react';
import '../img/block.jpg';

const PostItem = () => {
    return (
        <div className="post__container">
            <div className="post__content">
              <p className="post__title">Название поста</p>
              <img src='../img/block.jpg' alt="Image: Post Image" className="post__image" />
              <p className="post__text">Описание поста</p>
            </div>
        </div>

    );


};
export default PostItem;