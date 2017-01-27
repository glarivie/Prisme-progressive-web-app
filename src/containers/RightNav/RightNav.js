import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import styles from './RightNav.css';
import heart from '../../assets/coeur_blanc.svg';
import Search from '../../components/Search'
import FavoriteArticle from '../../components/FavoriteArticle';

class RightNav extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    favorites: PropTypes.object.isRequired,
  };

  render() {
    const { favorites } = this.props;

    return (
      <div className={styles.nav}>
        <div className={styles.inner}>
          <Search />
          <div className={styles.favoris}>
            <div className={styles.linethrough} />
            <div className={styles.content}>
              <img alt="heart" src={heart} role="presentation" />
              <h4>Favoris</h4>
            </div>
            <div className={styles.favorites}>
              {!!favorites && _.map(favorites, prisme =>
                _.map(prisme, (article, index) => (
                  <FavoriteArticle
                    key={index}
                    {...article}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  favorites: _.get(user, 'favorites', {}),
});

export default connect(mapStateToProps)(RightNav);
