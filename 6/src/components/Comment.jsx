import React from 'react';
import { useSelector } from 'react-redux';

const Comment = ({ commentId }) => {
  // BEGIN (write your solution here)
  const { entities: comments } = useSelector((state) => state.commentsReducer);
  const { entities: users } = useSelector((state) => state.usersReducer);

  const comment = comments[commentId];
  const author = comment ? users[comment.author] : null;
  // END

  if (!author || !comment) {
    return null;
  }

  return (
    <>
      <h5 className="card-title">{ author.name }</h5>
      <p className="card-text">{ comment.text }</p>
    </>
  );
};

export default Comment;
