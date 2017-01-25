import React, { PropTypes, Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import cx from 'classnames';

import styles from './App.css';
import actions from '../../actions';

import RightNav from '../RightNav';

class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    dispatch: PropTypes.func.isRequired,
    isNavOpen: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener('resize', this.updateWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth);
  }

  updateWindowWidth = () => {
    const { dispatch } = this.props;
    const width = findDOMNode(this._app).getBoundingClientRect().width;

    dispatch(actions.app.updateWindowWidth(width));
  };

  closeNav = () =>
    this.props.dispatch(actions.app.toggleNav(false));

  render() {
    const { children, isNavOpen } = this.props;

    return (
      <div
        className={styles.app}
        ref={c => this._app = c}
      >
        <RightNav />
        <main
          className={cx({ [styles.isNavOpen]: isNavOpen })}
          onClick={isNavOpen && this.closeNav}
        >
          {children}
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  isNavOpen: _.get(app, 'isNavOpen', true),
});

export default connect(mapStateToProps)(App);
