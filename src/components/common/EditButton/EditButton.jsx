import styles from './EditButton.module.css';
import editIcon from '@/assets/icons/edit.svg';

export default function EditButton({ onClick, isEditing }) {
  return (
    <>
      <button className={styles.editButton} onClick={onClick}>
        <img src={editIcon} alt="Edit icon" />
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </>
  );
}
