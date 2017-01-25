import React from 'react';
import _ from 'lodash';

import styles from './Splash.css';
import browserHistory from '../../browserHistory';

import Loading from '../../components/Loading';
import Triangles from '../../components/Triangles';
import logo from '../../assets/logo_blanc.svg'


const Splash = () => {
  setTimeout(() => {
    browserHistory.push({
      pathname: '/sign-in',
    });
  }, _.random(2000, 3000));

  return (
    <div className={styles.splash}>
      <Triangles kind="white" />
      <div className={styles.zone}>
        <img src={logo} role="presentation" alt="logo prisme" />
        <Loading />
      </div>
    </div>
  );
};

export default Splash;
