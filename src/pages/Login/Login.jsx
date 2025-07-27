import staticEyeOffIcon from '@assets/icons/hide-eye-icon.png';
import { useAuth } from '@context/AuthContext';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Login.module.css';

export default function Login() {
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch(
        'https://right-bite-store.onrender.com/api/v1/auth/sing-in',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        },
      );

      if (res.ok) {
        const data = await res.json();
        login(data.accessToken, data.refreshToken); // викликаємо з AuthContext
        navigate('/profile');
      } else if (res.status === 404) {
        setError('Email не знайдено.');
      } else if (res.status === 400) {
        setError('Невірні дані для входу.');
      } else {
        setError('Сталася помилка. Спробуйте ще раз.');
      }
    } catch (err) {
      setError('Сервер недоступний. Спробуйте пізніше.');
    }
  };

  return (
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

          <form className={styles.form} onSubmit={handleLogin}>
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button href="#" className={styles.link}>
                Forget your password
              </button>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button type="submit" className={styles.button}>
              Log in
            </button>
          </form>

          <p className={styles.inntitle}>
            Don’t have an account?{' '}
            <Link to="/createacc" className={styles.link}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
