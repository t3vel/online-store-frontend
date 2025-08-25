import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

import styles from './CreateAcc.module.css';
import staticEyeOffIcon from '@assets/icons/hide-eye-icon.png';
import staticEyeIcon from '@assets/icons/open-eye-icon.png';

export default function CreateAcc() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmationPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        'https://right-bite-store.onrender.com/api/v1/auth/sing-up',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, confirmationPassword }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.message || 'Registration failed');
        return;
      }

      // після успішної реєстрації - логін (тимчасово)
      const loginRes = await fetch(
        'https://right-bite-store.onrender.com/api/v1/auth/sing-in',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }
      );

      const loginData = await loginRes.json();

      if (loginRes.ok && loginData.accessToken && loginData.refreshToken) {
        login(loginData.accessToken, loginData.refreshToken);
        navigate('/successreg');
      } else {
        setError('Account created, but login failed');
      }
    } catch (err) {
      console.error('Error occurred:', err);
      setError('Server error');
    } finally {
      setLoading(false);
    }
  };
    const isFormFilled = email && password && confirmationPassword;
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

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.email}>
                <h4 className={styles.paragraphe}>Email address</h4>
                <input
                  type="email"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className={styles.email}>
                <div className={styles.flex}>
                  <h4 className={styles.paragraphe}>Password</h4>
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className={styles.togglePasswordButton}
                  >
                    {passwordShown ? (
                      <img
                        src={staticEyeIcon}
                        alt="Show password"
                        className={styles.togglePasswordIcon}
                      />
                    ) : (
                      <img
                        src={staticEyeOffIcon}
                        alt="Hide password"
                        className={styles.togglePasswordOffIcon}
                      />
                    )}
                    {passwordShown ? 'Show' : 'Hide'}
                  </button>
                </div>

                <div className={styles.passwordInputWrapper}>
                  <input
                    type={passwordShown ? 'text' : 'password'}
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
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
                    {confirmPasswordShown ? (
                      <img
                        src={staticEyeIcon}
                        alt="Show password"
                        className={styles.togglePasswordIcon}
                      />
                    ) : (
                      <img
                        src={staticEyeOffIcon}
                        alt="Hide password"
                        className={styles.togglePasswordOffIcon}
                      />
                    )}
                    {confirmPasswordShown ? 'Show' : 'Hide'}
                  </button>
                </div>

                <div className={styles.passwordInputWrapper}>
                  <input
                    type={confirmPasswordShown ? 'text' : 'password'}
                    className={styles.input}
                    value={confirmationPassword}
                    onChange={(e) => setConfirmationPassword(e.target.value)}
                    required
                  />
                </div>
                <p className={styles.condition}>
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </p>
              </div>

              {error && <p className={styles.error}>{error}</p>}

              <button
                type="submit"
                className={`${styles.button} ${!isFormFilled? styles.buttonDisabled: ''}`}
                disabled={loading}
              >
                {loading ? 'Creating...' : 'Create account'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
