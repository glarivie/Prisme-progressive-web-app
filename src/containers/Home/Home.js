import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './Home.css';
import { articles } from '../../constants';

class Home extends Component {

  render() {

    return (
      <div className={styles.homepage}>
        {articles.map(({ title, date, img, tags }, index) => (
          <div className={styles.single} key={index}>
            <div
              className={styles.photo}
              style={{ backgroundImage: `url('${img}')` }}
            >
              {tags.map(tag => (
                <small key={tag}>
                  <FontAwesome name="tag" className={styles.icon} />
                  {tag}
                </small>
              ))}
            </div>
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
