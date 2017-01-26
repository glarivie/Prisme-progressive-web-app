import React, { Component } from 'react';
import _ from 'lodash';
import cx from 'classnames';

import styles from './Prismes.css';
import browserHistory from '../../browserHistory';
import prismes from '../../constants';

const data = [{
  triangle: require('../../assets/triangle_01.svg'),
  title: 'PRIMAIRES',
  synopsis: 'Bug lors du décompte des votes: que s\'est-il passé ?',
}, {
  triangle: require('../../assets/triangle_02.svg'),
  title: 'FESSENHEIM',
  synopsis: 'Fessenheim ferme: vraiment ?',
}, {
  triangle: require('../../assets/triangle_03.svg'),
  title: 'REVENU UNIVERSEL',
  synopsis: 'Le revenu universel: utopie ou initiative réaliste ?',
}, {
  triangle: require('../../assets/triangle_04.svg'),
  title: 'SMART CITIES',
  synopsis: 'Regards croisés sur un l\'avenir de nos villes',
}];

class Prismes extends Component {
  goToPrisme = pathname => {
    browserHistory.push({ pathname });
  };

  render() {
    return (
      <div className={styles.prismes}>
        {data.map(({ triangle, title, synopsis }, index) => (
          <div
            key={index}
            className={styles.triangle}
            onClick={() => this.goToPrisme(`/prisme/${index}`)}
          >
            <img src={triangle} role="presentation" className={styles.svg} />
            <div className={cx({
              [styles.even]: index % 2 === 0,
              [styles.odd]: index % 2 !== 0,
            })}>
              <h2>{title}</h2>
              <p>{synopsis}</p>
              <small>{prismes[index].length} articles</small>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Prismes;
