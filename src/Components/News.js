import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListItem, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { getNews } from '../Redux/actions';

const useStyles = makeStyles((theme) => ({
  listItem: {
    flexDirection: 'column',
    backgroundColor: 'rgba(245,245,246, 0.5)',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(2)
  },
  title: {
    textAlign: 'center',
    width: '100%',
    fontSize: '18px',
    marginBottom: theme.spacing(1)
  },
  infoBlock: {
    display: 'flex',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  subtitle: {
    marginRight: '4px'
  },

  link: {
    textDecoration: 'none',
    color: 'black'
  }
}))

const News = ({newsId}) => {
  const dispatch = useDispatch();
  const currentNews = useSelector((state) => state.news.allNews).find(news => news.id === newsId);
  const styles = useStyles();

  const convertDate = (timestamp) => {
    const date = new Date(timestamp * 1000)
    return date.toLocaleDateString('en-GB');
  }

  React.useEffect(() => {
    dispatch(getNews(newsId));
  }, [dispatch, newsId])

  return (
    <Link to={`/news/${newsId}`} className={styles.link}>
    {
      currentNews && (
        <ListItem
          button
          className={styles.listItem}
        >
          <Typography className={styles.title}>
            {currentNews.title}
          </Typography>
          <div className={styles.infoBlock}>
            <div>
              <Typography variant='subtitle2' component='span' className={styles.subtitle}>
                score: 
              </Typography>
              <Typography variant='body2' component='span'>
                {currentNews.score}
              </Typography>
            </div>
            <div>
              <Typography variant='subtitle2' component='span' className={styles.subtitle}>
                author: 
              </Typography>
              <Typography variant='body2' component='span'>
                {currentNews.by}
              </Typography>
            </div>
            <div>
              <Typography variant='subtitle2' component='span' className={styles.subtitle}>
                date: 
              </Typography>
              <Typography variant='body2' component='span'>
                {convertDate(currentNews.time)}
              </Typography>
            </div>
  
          </div>
          
          
           
        </ListItem>
      )
    }
    </Link>
  )
}

export default News;