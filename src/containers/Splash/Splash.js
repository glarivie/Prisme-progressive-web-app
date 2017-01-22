import React from 'react';
import cx from 'classnames';

import styles from './Splash.css';
import logo from '../../assets/logo.png';

import browserHistory from '../../browserHistory';

const Splash = () => {
  setTimeout(() => {
    browserHistory.push({
      pathname: '/sign-in',
    });
  }, 2000);

  return (
    <div className={styles.splash}>
      <img src={logo} role="presentation" alt="logo prisme" />
      <h1>PRISME</h1>
      <div className={styles['sk-cube-grid']}>
        <div className={cx(styles['sk-cube'], styles['sk-cube1'])}></div>
        <div className={cx(styles['sk-cube'], styles['sk-cube2'])}></div>
        <div className={cx(styles['sk-cube'], styles['sk-cube3'])}></div>
        <div className={cx(styles['sk-cube'], styles['sk-cube4'])}></div>
        <div className={cx(styles['sk-cube'], styles['sk-cube5'])}></div>
        <div className={cx(styles['sk-cube'], styles['sk-cube6'])}></div>
        <div className={cx(styles['sk-cube'], styles['sk-cube7'])}></div>
        <div className={cx(styles['sk-cube'], styles['sk-cube8'])}></div>
        <div className={cx(styles['sk-cube'], styles['sk-cube9'])}></div>
      </div>
    </div>
  );
};

export default Splash;
