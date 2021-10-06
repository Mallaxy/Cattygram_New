import React from 'react';
import { PostAvatarContainer, PostBlock, PostContent } from '../MyPosts.style';

const Post = ({ post }) => {
  const { body, title } = post;

  return (
    <PostBlock>
      <PostAvatarContainer>
        <img src='http://placehold.it/150/a6ef6c' alt='' />
      </PostAvatarContainer>
      <PostContent>
        <h3>{title}</h3>
        <p>{body}</p>
      </PostContent>
    </PostBlock>
  );
};

export default Post;
