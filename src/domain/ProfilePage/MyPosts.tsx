import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { MainBlock, Textarea, TopBlock } from './MyPosts.style';
import Post from './components/Post';

export const MyPosts = ({ posts, addPost }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const onSubmit = () => {
    dispatch(addPost(text));
    setText('');
  };

  return (
    <MainBlock>
      <TopBlock>
        <Textarea
          placeholder='Text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <h2>My posts</h2>
          <button type='button' onClick={() => onSubmit()}>
            Post
          </button>
        </div>
      </TopBlock>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </MainBlock>
  );
};
