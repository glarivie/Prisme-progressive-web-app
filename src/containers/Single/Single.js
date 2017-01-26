import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import qs from 'querystring';
import _ from 'lodash';

import styles from './Single.css';
import Header from '../../components/Header';
import actions from '../../actions';

import prismes from '../../constants';
import data from '../../constants/data';
import brands from '../../constants/brands';
import heartWhite from '../../assets/coeur_blanc.svg';
import heartBlack from '../../assets/coeur_noir.svg';

class Single extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  addToFavorite = () => {
    const { location: { query: { article, prisme } }, dispatch } = this.props;
    const { category, title, source, img } = prismes[prisme][article];

    dispatch(actions.user.addToFavorite(article, prisme, {
      pathname: `/single?${qs.stringify({ article, prisme })}`,
      category,
      title,
      source,
      img,
    }));
  };

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
            onClick={this.addToFavorite}
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
              onClick={this.addToFavorite}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Single);
