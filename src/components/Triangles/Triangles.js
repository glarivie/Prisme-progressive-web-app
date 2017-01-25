import React, { PropTypes } from 'react';
import _ from 'lodash';

import styles from './Triangles.css';

const triangles = {
  white: [
    require('../../assets/triangle_haut_blanc_transparent.svg'),
    require('../../assets/triangle_bas_blanc_transparent.svg'),
    require('../../assets/triangle_gauche_blanc_transparent.svg'),
    require('../../assets/triangle_droit_blanc_transparent.svg'),
  ],
  color: [
    require('../../assets/triangle_haut_couleur.svg'),
    require('../../assets/triangle_bas_couleur.svg'),
    require('../../assets/triangle_gauche_couleur.svg'),
    require('../../assets/triangle_droit_couleur.svg'),
  ],
  transparent: [
    require('../../assets/triangle_haut_couleur_transparent.svg'),
    require('../../assets/triangle_bas_couleur_transparent.svg'),
    require('../../assets/triangle_gauche_couleur_transparent.svg'),
    require('../../assets/triangle_droit_couleur_transparent.svg'),
  ],
};

const Triangles = ({ kind, invert = false, prisme }) => {
  if (_.isUndefined(prisme)) {
    return (
      <div className={styles.prismes}>
        {triangles[kind].map((triangle, index) => (
          <img
            key={index}
            src={triangle}
            className={styles[`triangle${index}`]}
            role="presentation"
            style={{ filter: invert && 'invert(100%) opacity(25%)' }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.prismes}>
      <img
        src={triangles[kind][prisme]}
        className={styles[`triangle${prisme}`]}
        role="presentation"
        style={{ filter: invert && 'invert(100%) opacity(25%)' }}
      />
    </div>
  );
};

Triangles.propTypes = {
  kind: PropTypes.string.isRequired,
  invert: PropTypes.bool,
  prisme: PropTypes.number,
};

export default Triangles;
