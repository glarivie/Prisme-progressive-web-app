import React, { Component, PropTypes } from 'react';
import fuzzy from 'fuzzy';
import { connect } from 'react-redux';
import _ from 'lodash';

import styles from './Search.css';
import loupe from '../../assets/loupe_blanc.svg';
import prismes from '../../constants';
import browserHistory from '../../browserHistory';
import actions from '../../actions';

class Search extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  state = {
    value: '',
    results: [],
  };

  flatten = prismes =>
    prismes
      .reduce((result, next) => result.concat(next))
      .map(({ title, prisme, article, img }, index) => ({
        title,
        pathname: '/single',
        query: { article, prisme },
        img,
      }));

  search = ({ target: { value } }) => {
    const results = fuzzy
      .filter(
        value,
        this.flatten(prismes),
        { extract: ({ title }) => title },
      ).map(({ original }, index) => original);

    this.setState({ value, results });
  };

  goToArticle = (pathname, query) => {
    const { dispatch } = this.props;

    this.setState({
      value: '',
      results: [],
    });
    dispatch(actions.app.toggleNav(false));
    browserHistory.push({ pathname, query });
    document.body.style.overflow = 'visible';
  };

  render() {
    const { value, results } = this.state;

    return (
      <div className={styles.search}>
        <img
          src={loupe}
          role="presentation"
          alt="loupe"
          className={styles.loupe}
        />
        <input
          type="search"
          name="search"
          placeholder="Recherche"
          value={value}
          onChange={this.search}
        />
        {!_.isEmpty(results) && (
          <div className={styles.results}>
            {results.map(({ title, pathname, query, img }, index) => index < 5 && (
              <div
                className={styles.line}
                key={index}
                onClick={() => this.goToArticle(pathname, query)}
              >
                <img
                  src={img}
                  role="presentation"
                  className={styles.searchImage}
                />
                <small>{title}</small>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default connect()(Search);
