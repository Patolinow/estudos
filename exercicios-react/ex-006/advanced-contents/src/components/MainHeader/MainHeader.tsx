import React from 'react';
import HeaderProps from '../../interfaces/HeaderProps';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props:HeaderProps):JSX.Element => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
