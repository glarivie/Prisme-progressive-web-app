import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './SignUp.css';
import profil from '../../assets/profil.svg';
import retour from '../../assets/retour.svg';

class SignUp extends Component {
  user = {
    name: '',
    mail: '',
    password: '',
  };

  handleChange = (value, type) => {
    this.setUser({ [type]: value });
  };

  handleSubmit = e => e.preventDefault();

  render() {
    return (
      <div className={styles.signup}>
        <header className={styles.header}>
          <Link to="/"><img src={retour} alt='Back'/></Link>
          <h1> CREER UN COMPTE </h1>
        </header>
        <form>
          <img src={profil}
            alt="user icon"
            className={styles.icon}
          />
          <div className={styles.group}>
            <label>nom d'utilisateur</label>
            <input
              name="username"
              type="text"
              onChange={({ target: { value } }) => this.handleChange(value, 'name')}
            />
          </div>
          <div className={styles.group}>
            <label>email</label>
            <input
              name="mail"
              type="email"
              onChange={({ target: { value } }) => this.handleChange(value, 'mail')}
            />
          </div>
          <div className={styles.group}>
          <label>mot de passe</label>
            <input
              name="password"
              type="password"
              onChange={({ target: { value } }) => this.handleChange(value, 'password')}
            />
          </div>
          <div className={styles.text}>
            En créant votre compte, vous confirmez que vous acceptez les
            <b> conditions générales d'utilisations</b>.
          </div>
          <Link to="/fav-select"><button type="submit">Suivant</button></Link>
        </form>
      </div>
    )
  }
}

export default SignUp;
