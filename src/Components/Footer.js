import React from 'react';
import { Container, Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(3)
  }
}));

const Footer = () => {
  const styles = useStyles();
  return (
    <div>
      <Divider />
      <Container className={styles.footer}>
        Created by Vladimir Mikhailov
      </Container>
    </div>
  )
}

export default Footer;