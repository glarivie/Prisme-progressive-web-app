import React, { PropTypes } from 'react';

import styles from './Article.css';

const Article = ({ index, title, img, category, source, goToSingle }) => (
  <div
    className={styles.single}
    onClick={() => goToSingle(index)}
  >
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
  goToSingle: PropTypes.func.isRequired,
};

export default Article;
