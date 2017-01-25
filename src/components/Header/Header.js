import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import styles from './Header.css';
import browserHistory from '../../browserHistory';

import back from '../../assets/retour_noir.svg';
import dots from '../../assets/troispoints_noir.svg';

import actions from '../../actions';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    options: PropTypes.bool,
    prisme: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    isNavOpen: PropTypes.bool,
  };

  static defaultProps = {
    options: false,
    prisme: false,
  };

  goBack = () => browserHistory.goBack();

  toggleNav = () => {
    const { isNavOpen, dispatch } = this.props;
    dispatch(actions.app.toggleNav(!isNavOpen));
  };

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
          <img
            src={dots}
            role="presentation"
            onClick={this.toggleNav}
          />
        )}
      </header>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  isNavOpen: _.get(app, 'isNavOpen', false),
});

export default connect(mapStateToProps)(Header);
