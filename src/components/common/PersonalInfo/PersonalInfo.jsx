import styles from './PersonalInfo.module.css';

import editIcon from '@/assets/icons/edit.svg';

export default function PersonalInfo() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Personal Information</h2>
        <button className={styles.editButton}>
          <img src={editIcon} alt="Edit icon" />
          Edit
        </button>
      </div>
      <form className={styles.form} autoComplete="off">
        <div className={styles.twoColumns}>
          <fieldset className={styles.fieldGroup}>
            <label htmlFor="firstName">
              First name <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              required
            />
          </fieldset>
          <fieldset className={styles.fieldGroup}>
            <label htmlFor="lastName">
              Last name <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              required
            />
          </fieldset>
          <fieldset className={styles.fieldGroup}>
            <label htmlFor="email">
              Email adress <span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value="adamwilson@gmail.com"
              required
            />
          </fieldset>
          <fieldset className={styles.fieldGroup}>
            <label htmlFor="phone">
              Phone Number <span className={styles.required}>*</span>
            </label>
            <input type="tel" id="phone" name="phone" required />
          </fieldset>
        </div>
        <p className={styles.requiredNote}>
          Required fields <span className={styles.required}>*</span>
        </p>
      </form>
    </section>
  );
}
