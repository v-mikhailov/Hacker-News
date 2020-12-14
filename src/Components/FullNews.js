import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Paper, makeStyles, Typography, Divider} from '@material-ui/core';

import { getItems } from '../Redux/actions';
import Header from './Header';
import CommentsList from './CommentsList';


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4)
  },
  paper: {
    width: '70%',
    minHeight: '50vh',
    backgroundColor: 'rgba(245,245,246, 0.5)',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  title: {
    display: 'block',
    textAlign: 'center',
    marginBottom: theme.spacing(2)
  },
  link: {
    textDecoration: 'none',
  },
  infoBlock: {
    display: 'flex',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(2)
  },
  subtitle: {
    marginRight: '4px'
  },
}))

const FullNews = ({match}) => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.oneNews);
  const styles = useStyles();

  React.useEffect(() => {
    dispatch(getItems(match.params.id, 'fullNews'));

    const timer = setInterval(() => {
      dispatch(getItems(match.params.id, 'fullNews'));
    }, 60000);

    return () => clearInterval(timer);
  }, [dispatch, match.params.id]);

  const convertDate = (timestamp) => {
    const date = new Date(timestamp * 1000)
    return date.toLocaleDateString('en-GB');
  }


  return (
    <React.Fragment>
      <Header isMainPage={false} newsId={match.params.id}/>
      <Container className={styles.container}>
        <Paper className={styles.paper}>
          <Typography variant="h4" className={styles.title}> 
            {news.title}
          </Typography>
          <Divider />
          <Container>
            <div className={styles.infoBlock}>
              <div>
                <Typography variant='subtitle2' component='span' className={styles.subtitle}>
                  link: 
                </Typography>
                <Typography variant='body2' component='span'>
                  <a href={news.url} className={styles.link}>{news.url}</a>
                </Typography>
              </div>
              <div>
                <Typography variant='subtitle2' component='span' className={styles.subtitle}>
                  author: 
                </Typography>
                <Typography variant='body2' component='span'>
                  {news.by}
                </Typography>
              </div>
              <div>
                <Typography variant='subtitle2' component='span' className={styles.subtitle}>
                  date: 
                </Typography>
                <Typography variant='body2' component='span'>
                  {convertDate(news.time)}
                </Typography>
              </div>
            </div>
            <CommentsList comments={news.kids}/>
          </Container>
        </Paper> 
      </Container>
    </React.Fragment>
  )
}

export default FullNews;