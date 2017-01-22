import React from 'react';

import styles from './Header.css';
import burger from '../../assets/burger_noir.svg';
import readLater from '../../assets/Lire_plus_tard_gris.svg';

const Header = () => (
  <header className={styles.header}>
    <img src={burger}
      role="presentation"
      alt="burger menu"
      className={styles.burger}
    />
    <img
      src={readLater}
      role="presentation"
      alt="read later menu"
      className={styles.later}
    />
  </header>
);

export default Header;
