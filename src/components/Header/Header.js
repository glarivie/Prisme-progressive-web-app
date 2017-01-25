import React, { PropTypes, Component } from 'react';

import styles from './Header.css';
import browserHistory from '../../browserHistory';

import back from '../../assets/retour_noir.svg';
import dots from '../../assets/troispoints_noir.svg';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    options: PropTypes.bool,
    prisme: PropTypes.bool,
  };

  static defaultProps = {
    options: false,
    prisme: false,
  };

  goBack = () => browserHistory.goBack();

  render() {
    const { title, options, prisme } = this.props;

    return (
      <header className={styles.header}>
        <img
          src={back}
          role="presentation"
          onClick={this.goBack}
        />
        {options && (
          <img src={dots} role="presentation" />
        )}
      </header>
    );
  }
}

export default Header;
