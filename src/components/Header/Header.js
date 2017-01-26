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
    pathname: PropTypes.string.isRequired,
  };

  static defaultProps = {
    options: false,
    prisme: false,
  };

  goBack = () => {
    const { pathname } = this.props;
    browserHistory.push({ pathname });
  };

  toggleNav = () => {
    const { isNavOpen, dispatch } = this.props;

    dispatch(actions.app.toggleNav(!isNavOpen));
    document.body.style.overflow = 'hidden';
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
        {title && (
          <div className={styles.title}>
            {prisme && <span>/\</span>}
            <h4>{title}</h4>
          </div>
        )}
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
