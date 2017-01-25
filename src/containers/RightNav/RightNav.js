import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './RightNav.css';

class RightNav extends Component {


  render() {


    return (
      <div className={styles.nav}>
        <header>
          <input
            type="search"
            name="search"
            placeholder="Recherche"
          />
        </header>
      </div>
    );
  }
}

export default connect()(RightNav);
