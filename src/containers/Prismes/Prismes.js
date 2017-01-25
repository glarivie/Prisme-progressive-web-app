import React from 'react';
import { Link } from 'react-router';

import styles from './Prismes.css';
import Triangles from '../../components/Triangles';

const Prismes = () => (
  <div className={styles.prismes}>
    <Triangles kind="color" />
    <Link to="prisme/0" className={styles.top}>PRISME<br />PRIMAIRES</Link>
    <Link to="prisme/1" className={styles.down}>PRISME<br />TRUMP</Link>
    <Link to="prisme/2" className={styles.left}>PRISME<br />NUCLÉAIRE</Link>
    <Link to="prisme/3" className={styles.right}>PRISME<br />ÉCOLOGIE</Link>
  </div>
);

export default Prismes;
