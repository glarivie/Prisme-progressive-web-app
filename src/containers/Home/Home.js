import React, { Component } from 'react';

import styles from './Home.css';
import { articles } from '../../constants';

import Header from '../../components/Header';
import Article from '../../components/Article';
import LeftMenu from '../../components/LeftMenu';

class Home extends Component {
  state = { isLeftMenuOpen: false };

  toggleLeftMenu = () =>
    this.setState({ isLeftMenuOpen: !this.state.isLeftMenuOpen });

  closeLeftMenu = () =>
    this.setState({ isLeftMenuOpen: false });

  render() {
    const { isLeftMenuOpen } = this.state;

    return (
      <div className={styles.homepage}>
        <LeftMenu
          isOpen={isLeftMenuOpen}
          close={this.closeLeftMenu}
        />
        <Header toggleLeftMenu={this.toggleLeftMenu} />
        {articles.map((single, index) => (
          <Article
            key={index}
            index={index}
            {...single}
          />
        ))}
      </div>
    );
  }
}

export default Home;
