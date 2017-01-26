import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import qs from 'querystring';

import styles from './FavoriteArticle.css';
import browserHistory from '../../browserHistory';
import actions from '../../actions';

class FavoriteArticle extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  goToFavorite = () => {
    const { pathname, dispatch } = this.props;
    const query = qs.parse(pathname.split('?')[1]);

    dispatch(actions.app.toggleNav(false));
    browserHistory.push({
      pathname: '/single',
      query,
    });
  };

  render() {
    const { title, img, category } = this.props;

    return (
      <div className={styles.single} onClick={this.goToFavorite}>
        <div
          className={styles.photo}
          style={{ backgroundImage: `url('${img}')` }}
        />
        <div className={styles.right}>
          <span>#{category}</span>
          <h5>{title}</h5>
        </div>
      </div>
    );
  }
}

export default connect()(FavoriteArticle);
