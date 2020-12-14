import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, ListItem } from '@material-ui/core';

import { getItems } from '../Redux/actions';

const useStyles = makeStyles((theme) => ({
  subListItem: {
    width: '70%',
    marginLeft: 'auto',
    fontSize: '12px',
    border: '1px solid black',
    marginBottom: theme.spacing(1)
  }
}))

const SubComment = ({commentId}) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comments.subComments).find(comment => comment.id === commentId);

  React.useEffect(() =>{
    dispatch(getItems(commentId, 'SubComent'))
  }, [commentId, dispatch])

  return (
    <React.Fragment>
      {
        (commentId && comment) && (
          <ListItem 
          className={styles.subListItem}
          button
        >
          {comment.text}
        </ListItem>
        )
      }
    </React.Fragment>
  )
}

export default SubComment