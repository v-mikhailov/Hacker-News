import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllNews } from '../Redux/actions';

const useStyles = makeStyles((theme) => ({
  toolBar: {
    justifyContent: 'space-between'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  refreshBttn: {
    marginRight: theme.spacing(1)
  }
}))

const Header = ({isMainPage = true}) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getAllNews())
  }

  return(
    <AppBar position="static">
    <Toolbar className={styles.toolBar}>
      <Typography variant="h4">
        Hacker News
      </Typography>
      <div>
      {
        isMainPage && (
          <Button 
          color="inherit"
          variant="outlined"
          onClick={handleClick}
          className={styles.refreshBttn}
        >
          Refresh
        </Button>
        )
      }
        <Link to='/' className={styles.link}>
          <Button 
            color="inherit"
            variant="outlined"
          >
            Main Page
          </Button>
        </Link>
      </div>
    </Toolbar>
  </AppBar>
  )
}

export default Header;