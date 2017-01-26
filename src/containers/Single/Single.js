import React, { PropTypes, Component } from 'react';
import moment from 'moment';

import styles from './Single.css';
import Header from '../../components/Header';

import prismes from '../../constants';
import data from '../../constants/data';
import brands from '../../constants/brands';
import heartWhite from '../../assets/coeur_blanc.svg';
import heartBlack from '../../assets/coeur_noir.svg';

class Single extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { location: { query: { article, prisme } } } = this.props;
    const { category, title, content, source, img } = prismes[prisme][article];

    return (
      <div className={styles.single}>
        <Header
          pathname={`/prisme/${prisme}`}
          title={data[prisme].name}
          options
          prisme
        />
        <div
          className={styles.image}
          style={{ backgroundImage: `url('${img}')` }}
        >
          <img
            src={brands[source]}
            role="presentation"
            alt="brand"
            className={styles.brand}
          />
          <img
            src={heartWhite}
            role="presentation"
            alt="heart"
            className={styles.heart}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.triangle} />
          <div className={styles.text}>
            <small>#{category}</small>
            <h2>{title}</h2>
            {content}
          </div>
          <div className={styles.source}>
            <img
              src={brands[source]}
              role="presentation"
              alt="brand"
              className={styles.brand}
            />
            <div className={styles.credit}>
              <small>{source} | {moment().format('DD/MM/YYYY à HH:mm')}</small>
              <small>Par Cyrielle Bedu</small>
            </div>
            <img
              src={heartBlack}
              role="presentation"
              alt="heart"
              className={styles.heart}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Single;
