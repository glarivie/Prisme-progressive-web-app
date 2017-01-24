import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './Header.css';

const Header = ({ singleMode = false, toggleLeftMenu }) => (
  <header className={styles.header}>
    
  </header>
);

Header.propTypes = {
  singleMode: PropTypes.bool,
  toggleLeftMenu: PropTypes.func,
};

export default Header;
