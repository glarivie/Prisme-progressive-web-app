import React, { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import styles from './SignIn.css';
// import logo from '../../assets/logo.png';

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
      pathname: '/home',
    });
  };

  render() {
    return (
      <div className={styles.signin}>
        {/* <img src={logo} role="presentation" alt="logo prisme" /> */}
        <form onSubmit={this.handleSubmit}>
          <div className={styles.group}>
            <FontAwesome name="envelope-o" className={styles.icon} />
            <input
              autoComplete="off"
              name="mail"
              type="email"
              onChange={({ target: { value } }) => this.handleChange(value, 'mail')}
              placeholder="Entrez votre adresse e-mail"
            />
          </div>
          <div className={styles.group}>
            <FontAwesome name="lock" className={styles.icon} />
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
