import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

import styles from "./Signup.module.css";
export default function Signup() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className={styles.inner}>
            <h1 className={styles.title}>
              Healthy choices start here!
              <br />
              Join us today
            </h1>
            <p className={styles.subtitle}>
              Already have an account?{" "}
              <span>
                <Link to="/login">Log in</Link>
              </span>
            </p>

            <form className={styles.form}>
              <button type="button" className={styles.socialBtn}>
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.5 14.5C28.5 22.228 22.235 28.5 14.5 28.5C6.765 28.5 0.5 22.228 0.5 14.5C0.5 6.765 6.765 0.5 14.5 0.5C22.235 0.5 28.5 6.765 28.5 14.5Z"
                    fill="#C6C6C6"
                  />
                </svg>
                Sign up with Google
              </button>

              <button type="button" className={styles.socialBtn}>
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.5 14.5C28.5 22.228 22.235 28.5 14.5 28.5C6.765 28.5 0.5 22.228 0.5 14.5C0.5 6.765 6.765 0.5 14.5 0.5C22.235 0.5 28.5 6.765 28.5 14.5Z"
                    fill="#C6C6C6"
                  />
                </svg>
                Sign up with Apple
              </button>

              <div className={styles.divider}>
                <hr /> <span className={styles.dividerText}>OR</span> <hr />
              </div>

              <button type="submit" className={styles.emailBtn}>
                <Link to="/createacc" className={styles.create}>
                  Sign up with phone or email
                </Link>
              </button>

              <p className={styles.terms}>
                By signing up, you agree to the{" "}
                <a href="#">Terms of Service </a>
                and <a href="#"> Privacy Policy</a>, including{" "}
                <a href="#">cookie use</a>.
              </p>
            </form>

            <div className={styles.footer}>
              <p className={styles.footerTitle}>Already have an account?</p>
              <Link to="/login" className={styles.loginBtn}>
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
