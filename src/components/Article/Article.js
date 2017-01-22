import React, { PropTypes } from 'react';

import styles from './Article.css';
import readLater from '../../assets/Lire_plus_tard_gris.svg';
import playlist from '../../assets/Plus_blanc.svg';

const Article = ({ img, tags, title }) => (
  <div className={styles.single}>
    <div
      className={styles.photo}
      style={{ backgroundImage: `url('${img}')` }}
    >
      <div className={styles.mask} />
      <div className={styles.content}>
        <small>{tags[1]}</small>
        <h3>{title}</h3>
        <div className={styles.actions}>
          <img src={readLater}
            role="presentation"
            alt="read later"
            className={styles.later}
          />
          <img src={playlist}
            role="presentation"
            alt="add to playlist"
            className={styles.playlist}
          />
        </div>
      </div>

    </div>
  </div>
);

Article.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Article;
