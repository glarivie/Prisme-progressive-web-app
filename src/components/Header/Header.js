import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './Header.css';
import burger from '../../assets/burger_noir.svg';
import readLater from '../../assets/Lire_plus_tard_gris.svg';

const Header = ({ singleMode = false }) => (
  <header className={styles.header}>
    {singleMode ? (
      <Link to="/home">&larr;</Link>
    ) : (
      <img src={burger}
        role="presentation"
        alt="burger menu"
        className={styles.burger}
      />
    )}
    <img
      src={readLater}
      role="presentation"
      alt="read later menu"
      className={styles.later}
    />
  </header>
);

Header.propTypes = {
  singleMode: PropTypes.bool,
};

export default Header;
