import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import styles from './PersonalInfo.module.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import EditButton from '../EditButton/EditButton';

export default function PersonalInfo() {
  const { userEmail } = useAuth();
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [isEditing, setIsEditing] = useState(false);

  const handleNameChange = (setter) => (e) => {
    const value = e.target.value;
    if (/^[a-zA-Zа-яА-ЯіїєґІЇЄҐ\s-]*$/.test(value)) {
      setter(value);
    }
  };

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Personal Information</h2>
        <EditButton onClick={toggleEditing} isEditing={isEditing} />
      </div>
      <form className={styles.form} autoComplete="off">
        <div className={styles.twoColumns}>
          <fieldset className={styles.fieldGroup}>
            <label htmlFor="firstName" className={styles.label}>
              First name <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={styles.personalInput}
              placeholder="Enter your first name"
              value={firstName}
              onChange={handleNameChange(setFirstName)}
              required
              pattern="^[a-zA-Zа-яА-ЯіїєґІЇЄҐ\s-]+$"
              title="Only letters, spaces, and hyphens allowed"
              disabled={!isEditing}
            />
          </fieldset>
          <fieldset className={styles.fieldGroup}>
            <label htmlFor="lastName" className={styles.label}>
              Last name <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={styles.personalInput}
              placeholder="Enter your last name"
              value={lastName}
              onChange={handleNameChange(setLastName)}
              required
              pattern="^[a-zA-Zа-яА-ЯіїєґІЇЄҐ\s-]+$"
              title="Only letters, spaces, and hyphens allowed"
              disabled={!isEditing}
            />
          </fieldset>
          <fieldset className={styles.fieldGroup}>
            <label htmlFor="email" className={styles.label}>
              Email address <span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.personalInput}
              value={userEmail}
              required
              disabled={!isEditing}
            />
          </fieldset>
          <fieldset className={styles.fieldGroup}>
            <label htmlFor="phone" className={styles.label}>
              Phone Number <span className={styles.required}>*</span>
            </label>
            <div className={`${styles.phoneInputWrapper} ${styles.phoneInput}`}>
              <PhoneInput
                id="phone"
                name="phone"
                international
                defaultCountry="UA"
                value={phone}
                onChange={setPhone}
                required
                disabled={!isEditing}
              />
            </div>
          </fieldset>
        </div>
        <p className={styles.requiredNote}>
          Required fields <span className={styles.required}>*</span>
        </p>
      </form>
    </section>
  );
}
