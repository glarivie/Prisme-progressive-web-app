import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './RightNav.css';
import heart from '../../assets/coeur_blanc.svg';

class RightNav extends Component {
  render() {
    return (
      <div className={styles.nav}>
        <div className={styles.inner}>
          <header>
            <input
              type="search"
              name="search"
              placeholder="Recherche"
            />
          </header>
          <img
            alt='coeur'
            src={heart}
          />
        </div>
      </div>
    );
  }
}

export default connect()(RightNav);
