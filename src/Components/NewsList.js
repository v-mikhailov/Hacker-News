import React from 'react';
import { Container, List, makeStyles, CircularProgress} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import News from './News';
import { getAllNews } from '../Redux/actions';

const useStyles = makeStyles((theme) => ({
  list: {
    width: '70%',
    paddingTop: theme.spacing(3),
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  loaderBlock: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(5),
    display: 'flex',
    justifyContent: 'center'
  }
}))

const NewsList = () => {
  const dispatch = useDispatch();
  const newsIds = useSelector((state) => state.news.allNewsIds);
  const loading = useSelector((state) => state.news.loading);
  const styles = useStyles();

  React.useEffect(() => {
    dispatch(getAllNews());
    const timer = setInterval(() => {
      dispatch(getAllNews());
    }, 60000);
    return () => clearInterval(timer);
  }, [dispatch])

  return(
    <Container>
    {
      loading ? (
        <div className={styles.loaderBlock}>
          <CircularProgress />
        </div>
      ): (
        <List className={styles.list}>
          {
            newsIds.map(newsId => {
              return (
                <News key={newsId} newsId={newsId}/>
              )
            })
          }
        </List>
      )
    }
    </Container>
  )
}

export default NewsList;