import React, { PropTypes, Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';

import styles from './App.css';
import actions from '../../actions';

class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    dispatch: PropTypes.func.isRequired,
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

  render() {
    const { children } = this.props;

    return (
      <div
        className={styles.app}
        ref={c => this._app = c}
      >
        {children}
      </div>
    );
  }
}

export default connect()(App);
