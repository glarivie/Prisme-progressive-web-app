import React, { PropTypes } from 'react';

import styles from './Triangles.css';

const triangles = {
  white: {
    top: require('../../assets/triangle_haut_blanc_transparent.svg'),
    down: require('../../assets/triangle_bas_blanc_transparent.svg'),
    left: require('../../assets/triangle_gauche_blanc_transparent.svg'),
    right: require('../../assets/triangle_droit_blanc_transparent.svg'),
  },
  color: {
    top: require('../../assets/triangle_haut_couleur.svg'),
    down: require('../../assets/triangle_bas_couleur.svg'),
    left: require('../../assets/triangle_gauche_couleur.svg'),
    right: require('../../assets/triangle_droit_couleur.svg'),
  },
};

const Triangles = ({ kind, invert = false }) => (
  <div className={styles.prismes}>
    <img
      src={triangles[kind].top}
      className={styles.top}
      role="presentation"
      style={{ filter: invert && 'invert(100%) opacity(25%)' }}
    />
    <img
      src={triangles[kind].down}
      className={styles.down}
      role="presentation"
      style={{ filter: invert && 'invert(100%) opacity(25%)' }}
    />
    <img
      src={triangles[kind].left}
      className={styles.left}
      role="presentation"
      style={{ filter: invert && 'invert(100%) opacity(25%)' }}
    />
    <img
      src={triangles[kind].right}
      className={styles.right}
      role="presentation"
      style={{ filter: invert && 'invert(100%) opacity(25%)' }}
    />
  </div>
);

Triangles.propTypes = {
  kind: PropTypes.string.isRequired,
  invert: PropTypes.bool,
};

export default Triangles;
