import React from 'react';
import { Link } from 'react-router';

import styles from './Prismes.css';

import top from '../../assets/triangle_haut_couleur.svg';
import down from '../../assets/triangle_bas_couleur.svg';
import left from '../../assets/triangle_gauche_couleur.svg';
import right from '../../assets/triangle_droit_couleur.svg';

const Prismes = () => (
  <div className={styles.prismes}>
    <img src={top} className={styles.top} role="presentation" />
    <Link to="prisme/0" className={styles.top}>PRISME<br />PRIMAIRES</Link>
    <img src={down} className={styles.down} role="presentation" />
    <Link to="prisme/1" className={styles.down}>PRISME<br />TRUMP</Link>
    <img src={left} className={styles.left} role="presentation" />
    <Link to="prisme/2" className={styles.left}>PRISME<br />NUCLÉAIRE</Link>
    <img src={right} className={styles.right} role="presentation" />
    <Link to="prisme/3" className={styles.right}>PRISME<br />ÉCOLOGIE</Link>
  </div>
);

export default Prismes;
