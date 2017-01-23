import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './Header.css';
import burger from '../../assets/burger_noir.svg';
import readLater from '../../assets/Lire_plus_tard_gris.svg';
import back from '../../assets/retour.svg';

const Header = ({ singleMode = false, toggleLeftMenu }) => (
  <header className={styles.header}>
    {singleMode ? (
      <Link to="/home">
      <img src={back}
        role="presentation"
        alt="back"
        className={styles.back}
      />
      </Link>
    ) : (
      <img src={burger}
        role="presentation"
        alt="burger menu"
        className={styles.burger}
        onClick={toggleLeftMenu}
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
  toggleLeftMenu: PropTypes.func,
};

export default Header;
