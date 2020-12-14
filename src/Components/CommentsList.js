import React from 'react';
import { List } from '@material-ui/core';
import { useSelector } from 'react-redux'

import Comment from './Comment';

const CommentsList = ({comments}) => {
  const commentsObjArr = useSelector((state) => state.comments.comments);

  const countComments = (comentsArr) => {
    let counter = 0;
    counter += comentsArr.length;
    // eslint-disable-next-line array-callback-return
    comentsArr.map((comment) => {
      if (comment.kids) {
        counter += comment.kids.length
      }
    })
    return counter
  }
  return (
    <div>
    {
      comments ? (
        <div>
          {
            <List>
              {
                comments.map(commentId => {
                  return (
                    <Comment key={commentId} commentId={commentId}/>
                  )
                })
              }
            </List>
          }
          {
            comments.length && (
              <span>{`Total Comments: ${countComments(commentsObjArr)}`}</span>
            ) 
          }
        </div>

      ) : (
        <div>
          Comments: 0
          <p>No one has commented yet</p>
        </div>
      )
    }
    </div>
  )
}

export default CommentsList