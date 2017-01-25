import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './Article.css';

const Article = ({ index, title, img, category, source }) => (
  <div className={styles.single}>
    <div
      className={styles.photo}
      style={{ backgroundImage: `url('${img}')` }}
    />
    <div className={styles.right}>
      <h2>{title}</h2>
      <small>Sourcé pour vous du <span>{source}</span></small>
    </div>
  </div>
);

Article.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default Article;
