import React from 'react';

import Header from './Header';
import NewsList from './NewsList';
import Footer from './Footer';

const MainPage = () => {

  return (
    <React.Fragment>
      <Header isMainPage={true} />
      <NewsList />
      <Footer />
    </React.Fragment>
  )
}
export default MainPage;