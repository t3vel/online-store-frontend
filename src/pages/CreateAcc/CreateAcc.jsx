import { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';

import styles from './CreateAcc.module.css';
import staticEyeOffIcon from './img/icon.png';
import staticEyeIcon from './img/open-eye-icon.png';

export default function CreateAcc() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

   const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };



  return (
    <>
      
      <div className={styles.container}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className={styles.block}>
            <div className={styles.frame}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>Create an account</h1>
                <p className={styles.inntitle}>
                  Already have an ccount?
                  <Link to="/login" className={styles.link}>
                    {' '}
                    Log in
                  </Link>{' '}
                </p>
              </div>
              <p className={styles.start}>
                Start by entering your basic details
              </p>
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
                    {passwordShown ?<img
                      src={staticEyeIcon}
                      alt={passwordShown ? 'Show password' : 'Hide password'}
                      className={styles.togglePasswordIcon}
                    />
                    :
                    <img
                      src={staticEyeOffIcon}
                      alt={passwordShown ? 'Show password' : 'Hide password'}
                      className={styles.togglePasswordOffIcon}
                    />}
                    {passwordShown ? 'Show' : 'Hide'}{' '}
                  </button>
                </div>


                <div className={styles.passwordInputWrapper}>
                  <input
                    type={passwordShown ? 'text' : 'password'}
                    className={styles.input}
                  />
                </div>
                <p className={styles.condition}>
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </p>
              </div>


              <div className={styles.email}>
                <div className={styles.flex}>
                  <h4 className={styles.paragraphe}>Confirm Password</h4>
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className={styles.togglePasswordButton}
                  >
                   {confirmPasswordShown ? <img
                      src={staticEyeIcon}
                      alt={confirmPasswordShown ? 'Show password' : 'Hide password'}
                      className={styles.togglePasswordIcon}
                    />
                    :
                    <img
                      src={staticEyeOffIcon}
                      alt={confirmPasswordShown ? 'Show password' : 'Hide password'}
                      className={styles.togglePasswordOffIcon}
                    />}
                    {confirmPasswordShown ? 'Show' : 'Hide'}{' '}
                  </button>
                </div>



                <div className={styles.passwordInputWrapper}>
                  <input
                    type={passwordShown ? 'text' : 'password'}
                    className={styles.input}
                  />
                </div>
                <p className={styles.condition}>
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </p>
              </div>
            </form>
            <Link to="/successreg" className={styles.button}>
              Create account
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
