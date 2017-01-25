import React from 'react';
import { Link } from 'react-router';

import styles from './Page404.css';
import logo from '../../assets/logo_noir.svg';
import Triangles from '../../components/Triangles';

const Page404 = () => (
  <div className={styles.page404}>
    <Triangles kind="white" invert />
    <img src={logo} role="presentation" alt="logo" className={styles.logo} />
    <h2>Page introuvable</h2>
    <Link to="/prismes">Retourner à la page d'accueil</Link>
  </div>
);

export default Page404;
