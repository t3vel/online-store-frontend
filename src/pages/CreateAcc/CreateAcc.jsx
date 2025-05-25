import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

import styles from "./CreateAcc.module.css";
import staticEyeOffIcon from "./img/icon.png";

export default function CreateAcc() {
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
            <div className={styles.frame}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>Create an account</h1>
                <p className={styles.inntitle}>
                  Already have an ccount?
                  <Link to="/login" className={styles.link}>
                    {" "}
                    Log in
                  </Link>{" "}
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
                    <img
                      src={staticEyeOffIcon}
                      alt={passwordShown ? "Hide password" : "Show password"}
                      className={styles.togglePasswordIcon}
                    />
                    {passwordShown ? "Hide" : "Show"}{" "}
                  </button>
                </div>
                <div className={styles.passwordInputWrapper}>
                  <input
                    type={passwordShown ? "text" : "password"}
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
                    onClick={togglePasswordVisibility}
                    className={styles.togglePasswordButton}
                  >
                    <img
                      src={staticEyeOffIcon}
                      alt={passwordShown ? "Hide password" : "Show password"}
                      className={styles.togglePasswordIcon}
                    />
                    {passwordShown ? "Hide" : "Show"}{" "}
                  </button>
                </div>
                <div className={styles.passwordInputWrapper}>
                  <input
                    type={passwordShown ? "text" : "password"}
                    className={styles.input}
                  />
                </div>
                <p className={styles.condition}>
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </p>
              </div>
            </form>
            <button className={styles.button}>Create account</button>
          </div>
        </div>
      </div>
    </>
  );
}
