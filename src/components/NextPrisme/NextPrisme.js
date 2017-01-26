import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import cx from 'classnames';

import styles from './NextPrisme.css';

const NextPrisme = ({ id }) => (
  <div className={styles.nextPrisme}>
    {_.times(4, index => (
      <Link
        key={index}
        to={`/prisme/${index}`}
        className={cx({
          [styles.dot]: true,
          [styles.active]: _.isEqual(index, id),
        })}
      />
    ))}
  </div>
);

NextPrisme.propTypes = {
  id: PropTypes.number.isRequired,
};

export default NextPrisme;
