import React from 'react';
import _ from 'lodash';

import styles from './Splash.css';
import browserHistory from '../../browserHistory';

import Loading from '../../components/Loading';

import logo from '../../assets/logo_blanc.svg'
import top from '../../assets/triangle_haut_blanc_transparent.svg';
import down from '../../assets/triangle_bas_blanc_transparent.svg';
import left from '../../assets/triangle_gauche_blanc_transparent.svg';
import right from '../../assets/triangle_droit_blanc_transparent.svg';

const Splash = () => {
  setTimeout(() => {
    browserHistory.push({
      pathname: '/sign-in',
    });
  }, _.random(2000, 3000));

  return (
    <div className={styles.splash}>
      <div className={styles.prisme}>
        <img src={top} className={styles.top} role="presentation" alt="prisme" />
        <img src={down} className={styles.down} role="presentation" alt="prisme" />
        <img src={left} className={styles.left} role="presentation" alt="prisme" />
        <img src={right} className={styles.right} role="presentation" alt="prisme" />
      </div>
      <div className={styles.zone}>
        <img src={logo} role="presentation" alt="logo prisme" />
        <Loading />
      </div>
    </div>
  );
};

export default Splash;
