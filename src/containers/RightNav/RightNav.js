import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './RightNav.css';
import heart from '../../assets/coeur_blanc.svg';
import loupe from '../../assets/loupe_blanc.svg';

class RightNav extends Component {


  render() {
    return (
      <div className={styles.nav}>
        <div className={styles.inner}>
          <header>
            <img src={loupe} role="presentation" alt="loupe" />
            <input
              type="search"
              name="search"
              placeholder="Recherche"
            />
          </header>
          <div className={styles.favoris}>
            <div className={styles.linethrough} />
            <div className={styles.content}>
              <img alt="heart" src={heart} role="presentation" />
              <h4>Favoris</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(RightNav);
