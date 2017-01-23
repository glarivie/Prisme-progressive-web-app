import React, { PropTypes } from 'react';

import styles from './Single.css';
import { articles } from '../../constants';

import Header from '../../components/Header';

const Single = ({ location: { query: { id } } }) => {
  const { title, img, content, tags } = articles[id];

  return (
    <div className={styles.single}>
      <Header singleMode />
      <div
        className={styles.image}
        style={{ backgroundImage: `url('${img}')` }}
      />
      <div className={styles.content}>
        <div className={styles.triangle} />
        <div className={styles.text}>
          <small>{tags[0]}</small>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

Single.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Single;
