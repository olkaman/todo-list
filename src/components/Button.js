import styles from './Button.module.scss';

function Button({ handleOnClick, icon }) {
  return (
    <button onClick={handleOnClick} className={styles.iconButton}>
      {icon}
    </button>
  );
}
export default Button;
