import React from 'react';
import cx from 'classnames';

import styles from './Loading.css';

const Loading = () => (
  <div className={styles['sk-cube-grid']}>
    <div className={cx(styles['sk-cube'], styles['sk-cube1'])} />
    <div className={cx(styles['sk-cube'], styles['sk-cube2'])} />
    <div className={cx(styles['sk-cube'], styles['sk-cube3'])} />
    <div className={cx(styles['sk-cube'], styles['sk-cube4'])} />
    <div className={cx(styles['sk-cube'], styles['sk-cube5'])} />
    <div className={cx(styles['sk-cube'], styles['sk-cube6'])} />
    <div className={cx(styles['sk-cube'], styles['sk-cube7'])} />
    <div className={cx(styles['sk-cube'], styles['sk-cube8'])} />
    <div className={cx(styles['sk-cube'], styles['sk-cube9'])} />
  </div>
);

export default Loading;
