import React, { Component } from 'react';

import styles from './SignUp.css';
import profil from '../../assets/profil.svg';
import browserHistory from '../../browserHistory';

import Header from '../../components/Header';

class SignUp extends Component {
  state = {
    name: '',
    mail: '',
    password: '',
  };

  handleChange = (value, type) =>
    this.setState({ [type]: value });

  handleSubmit = e => {
    e.preventDefault();
    browserHistory.push({
      pathname: '/prismes',
    });
  };

  render() {
    return (
      <div className={styles.signup}>
        <Header title="CRÉER UN COMPTE" />
        <form onSubmit={this.handleSubmit}>
          <img
            src={profil}
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
          <small className={styles.text}>
            En créant votre compte, vous confirmez que vous acceptez les
            <b> conditions générales d'utilisation</b>.
          </small>
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    )
  }
}

export default SignUp;
