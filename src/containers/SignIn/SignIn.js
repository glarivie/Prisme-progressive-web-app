import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './SignIn.css';

import envelope from '../../assets/enveloppe_noir.svg';
import lock from '../../assets/cadenas_noir.svg';
import logo from '../../assets/logo_noir.svg';

import browserHistory from '../../browserHistory';

class SignIn extends Component {
  state = {
    mail: '',
    password: '',
  };

  handleChange = (value, type) => {
    this.setState({ [type]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    browserHistory.push({
      pathname: '/prismes',
    });
  };

  render() {
    return (
      <div className={styles.signin}>
        <img
          src={logo}
          role="presentation"
          alt="logo prisme"
          className={styles.logo}
        />
        <form onSubmit={this.handleSubmit}>
          <div className={styles.group}>
            <img src={envelope} role="presentation" className={styles.icon} />
            <input
              autoComplete="off"
              name="mail"
              type="email"
              onChange={({ target: { value } }) => this.handleChange(value, 'mail')}
              placeholder="Entrez votre adresse e-mail"
            />
          </div>
          <div className={styles.group}>
            <img src={lock} role="presentation" className={styles.icon} />
            <input
              autoComplete="new-password"
              name="password"
              type="password"
              onChange={({ target: { value } }) => this.handleChange(value, 'password')}
              placeholder="Entrez votre mot de passe"
            />
          </div>
          <button type="submit">Connexion</button>
          <small>Pas encore de compte ? <Link to="/signup">Inscrivez-vous</Link></small>
        </form>
        <footer>
          &copy; Copyright Prisme 2017
        </footer>
      </div>
    );
  }
}

export default SignIn;
