import React, { Component, PropTypes } from 'react';

import styles from './LeftMenu.css';

class LeftMenu extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
  };

  state = { search: '' };

  typeSearch = ({ target: { value } }) =>
    this.setState({ search: value });

  render() {
    const { search } = this.state;
    const { isOpen, close } = this.props;

    return (
      <div
        className={styles.leftmenu}
        style={{ transform: isOpen && 'translateX(0)' }}
      >
        <div className={styles.main}>
          <div className={styles.header}>
            {/* <img src={loupe} role="presentation" alt="search icon" /> */}
            <input
              type="search"
              name="search"
              value={search}
              onChange={this.typeSearch}
              placeholder="Recherche"
            />
          </div>
        </div>
        <div
          className={styles.transparent}
          onClick={close}
        />
      </div>
    );
  }
}

export default LeftMenu;
