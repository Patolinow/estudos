import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

interface HomeProps {
  onLogout():void
}

const Home = (props:HomeProps):JSX.Element => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
