import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListItem , makeStyles} from '@material-ui/core';

import { getItems } from '../Redux/actions';
import SubComments from './SubComments';

const useStyles = makeStyles((theme) => ({
  listItem: {
    fontSize: '12px',
    border: '1px solid black',
    marginBottom: theme.spacing(1)
  }
}))


export const Comment = ({commentId}) => {
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comments.comments).find(comment => comment.id === commentId);
  const styles = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open)
  }

  React.useEffect(() => {
    dispatch(getItems(commentId, 'Comment'))
  }, [commentId, dispatch])

  return (
    <React.Fragment>
    {
      comment && (
        <div>
          <ListItem 
            className={styles.listItem}
            button
            onClick={handleClick}
          >
            {comment.text}
          </ListItem>
          <SubComments isOpen={open} subComments={comment.kids}/>
        </div>
      )
    }
    </React.Fragment>
  )
}

export default Comment