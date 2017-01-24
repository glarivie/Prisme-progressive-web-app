import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './Article.css';

const Article = ({ img, tags, title, index }) => (
  <div className={styles.single}>
    <div
      className={styles.photo}
      style={{ backgroundImage: `url('${img}')` }}
    >
      <div className={styles.mask} />
      <div className={styles.content}>
        <small>{tags[1]}</small>
        <Link to={`/single?id=${index}`}>{title}</Link>
        <div className={styles.actions}>
          {/* <img src={readLater}
            role="presentation"
            alt="read later"
            className={styles.later}
          />
          <img src={playlist}
            role="presentation"
            alt="add to playlist"
            className={styles.playlist}
          /> */}
        </div>
      </div>
    </div>
  </div>
);

Article.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Article;
