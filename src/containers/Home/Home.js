import React, { Component } from 'react';

import styles from './Home.css';
import { articles } from '../../constants';

import Header from '../../components/Header';
import Article from '../../components/Article';

class Home extends Component {

  render() {

    return (
      <div className={styles.homepage}>
        <Header />
        {articles.map((single, index) => (
          <Article
            key={index}
            {...single}
          />
        ))}
      </div>
    );
  }
}

export default Home;
