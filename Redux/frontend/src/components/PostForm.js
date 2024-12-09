import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/postActions'; // Import action creator

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ title, body }));
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Tiêu đề" />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Nội dung" />
      <button type="submit">Tạo bài viết</button>
    </form>
  );
};

export default PostForm;