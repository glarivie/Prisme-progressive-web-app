import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './SignUp.css';

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
        <form>
          <FontAwesome name="user-o" className={styles.icon} />
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
          <p> En créant votre compte, vous confirmez que vous acceptez les conditions générales d utilisations.</p>
          <button type="submit">Suivant</button>
        </form>
      </div>
    )
  }
}

export default SignUp;
