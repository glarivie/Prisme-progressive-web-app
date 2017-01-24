import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './FavSelect.css';
import profil from '../../assets/profil.svg';
import retour from '../../assets/retour.svg';
import environnement from '../../assets/theme/Environnement.png';

class FavSelect extends Component {

  render() {
    return (
      <div className={styles.favselect}>
        <header className={styles.header}>
          <Link to="/sign-up"><img src={retour} alt='Back'/></Link>
          <h1> CREER UN COMPTE </h1>
        </header>

        <form>
          <div className={styles.text}>
            <img src={profil}
              alt="user icon"
              className={styles.icon}
            />
            Selectionner vos préférences
          </div>
          <input type="checkbox" ></input>
          <img src={environnement}
            alt="environnement"
          />{/*
          <img src={}
            alt=""
          /> */}
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    );
  }
}

export default FavSelect;
