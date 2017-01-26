import React, { PropTypes, Component } from 'react';

import styles from './Single.css';
import Header from '../../components/Header';

import prismes from '../../constants';
import data from '../../constants/data';

class Single extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { location: { query: { article, prisme } } } = this.props;

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
          style={{ backgroundImage: `url('${prismes[prisme][article].img}')` }}
        />
        <div className={styles.content}>
          <div className={styles.triangle} />
          <div className={styles.text}>
            <small>#{prismes[prisme][article].category}</small>
            <h2>{prismes[prisme][article].title}</h2>
            {prismes[prisme][article].content}
          </div>
        </div>
      </div>
    );
  }
}

export default Single;
