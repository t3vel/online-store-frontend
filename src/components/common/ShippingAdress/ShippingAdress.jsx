import add from '@assets/icons/add.png';
import EditButton from '@components/common/EditButton/EditButton';
import { useState } from 'react';
import styles from './ShippingAdress.module.css';

export default function ShippingAdress() {
  const [isEditing, setIsEditing] = useState(false);

  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [apartment, setApartment] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleChange = (setter, pattern) => (e) => {
    const value = e.target.value;
    if (pattern.test(value) || value === '') {
      setter(value);
    }
  };

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h2 className={styles.title}>Shipping Address</h2>
        <EditButton onClick={toggleEditing} isEditing={isEditing} />
      </div>

      <div className={styles.content}>
        <form className={styles.form} autoComplete="off">
          <fieldset className={styles.fieldGroup}>
            <label htmlFor="country" className={styles.label}>
              Country <span>*</span>
            </label>
            <input
              id="country"
              name="country"
              className={styles.input}
              required
              value={country}
              onChange={handleChange(
                setCountry,
                /^[a-zA-Zа-яА-ЯіїєґІЇЄҐ\s-]*$/,
              )}
              placeholder="Enter your country"
              disabled={!isEditing}
            />
          </fieldset>

          <fieldset className={styles.fieldGroup}>
            <label htmlFor="city" className={styles.label}>
              City <span>*</span>
            </label>
            <input
              id="city"
              name="city"
              className={styles.input}
              required
              value={city}
              onChange={handleChange(setCity, /^[a-zA-Zа-яА-ЯіїєґІЇЄҐ\s-]*$/)}
              placeholder="Enter your city"
              disabled={!isEditing}
            />
          </fieldset>

          <fieldset className={styles.fieldGroup}>
            <label htmlFor="street" className={styles.label}>
              Street Name <span>*</span>
            </label>
            <input
              id="street"
              name="street"
              className={styles.input}
              required
              value={street}
              onChange={handleChange(
                setStreet,
                /^[a-zA-Zа-яА-ЯіїєґІЇЄҐ0-9\s-/]*$/,
              )}
              placeholder="Enter your street name"
              disabled={!isEditing}
            />
          </fieldset>

          <fieldset className={styles.fieldGroup}>
            <label htmlFor="houseNumber" className={styles.label}>
              House Number <span>*</span>
            </label>
            <input
              id="houseNumber"
              name="houseNumber"
              className={styles.input}
              required
              value={houseNumber}
              onChange={handleChange(setHouseNumber, /^[0-9a-zA-Z-/]*$/)}
              placeholder="Enter house number"
              disabled={!isEditing}
            />
          </fieldset>

          <fieldset className={styles.fieldGroup}>
            <label htmlFor="apartment" className={styles.label}>
              Apartment/Suite{' '}
              <span className={styles.optional}>(Optional)</span>
            </label>
            <input
              id="apartment"
              name="apartment"
              className={styles.input}
              value={apartment}
              onChange={handleChange(setApartment, /^[0-9a-zA-Z-/]*$/)}
              placeholder="Apartment or suite number"
              disabled={!isEditing}
            />
          </fieldset>

          <fieldset className={styles.fieldGroup}>
            <label htmlFor="postalCode" className={styles.label}>
              Postal Code <span>*</span>
            </label>
            <input
              id="postalCode"
              name="postalCode"
              className={styles.input}
              required
              value={postalCode}
              onChange={handleChange(setPostalCode, /^[0-9a-zA-Z-/]*$/)}
              placeholder="Enter your postal code"
              disabled={!isEditing}
            />
          </fieldset>
        </form>

        <p className={styles.requiredNote}>
          Required fields <span className={styles.required}>*</span>
        </p>

        <button
          className={styles.addButton}
          type="button"
          disabled={!isEditing}
        >
          <img src={add} alt="Add additional address" />
          <span>Add additional address</span>
        </button>
      </div>
    </div>
  );
}
