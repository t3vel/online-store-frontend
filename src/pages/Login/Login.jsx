import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { Link } from 'react-router-dom';

import styles from './Login.module.css';

import staticEyeOffIcon from './img/icon.png';

export default function Login() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className={styles.block}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>
                Welcome back
                <br /> Healthy choices start here!
              </h1>
            </div>
            <form className={styles.form}>
              <div className={styles.email}>
                <h4 className={styles.paragraphe}>Email address</h4>
                <input type="email" className={styles.input} />
              </div>

              <div className={styles.email}>
                <div className={styles.flex}>
                  <h4 className={styles.paragraphe}>Password</h4>
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className={styles.togglePasswordButton}
                  >
                    <img
                      src={staticEyeOffIcon}
                      alt={passwordShown ? 'Hide password' : 'Show password'}
                      className={styles.togglePasswordIcon}
                    />
                    {passwordShown ? 'Hide' : 'Show'}{' '}
                  </button>
                </div>
                <div className={styles.passwordInputWrapper}>
                  <input
                    type={passwordShown ? 'text' : 'password'}
                    className={styles.input}
                  />
                </div>
                <a href="#" className={styles.link}>
                  Forget your password
                </a>
              </div>
            </form>
            <button className={styles.button}>Log in</button>
            <p className={styles.inntitle}>
              Don’t have an account?{' '}
              <Link to="/createacc" className={styles.link}>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
