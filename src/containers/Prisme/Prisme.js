import React, { Component, PropTypes } from 'react';

import styles from './Prisme.css';
import prismes from '../../constants';

import Header from '../../components/Header';
import Article from '../../components/Article';
import triangle from '../../assets/triangle_haut_couleurs_transparent.svg';

class Prisme extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
  };

  state = { isLeftMenuOpen: false };

  toggleLeftMenu = () =>
    this.setState({ isLeftMenuOpen: !this.state.isLeftMenuOpen });

  closeLeftMenu = () =>
    this.setState({ isLeftMenuOpen: false });

  render() {
    const { params: { id } } = this.props;
    const current = prismes[id];

    return (
      <div className={styles.prisme}>
        <Header options />
        <img src={triangle} role="presentation" className={styles.tri} />
        <div className={styles.articles}>
          {current.map((single, index) => (
            <Article
              key={index}
              index={index}
              {...single}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Prisme;
