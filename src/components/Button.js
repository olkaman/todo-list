import styles from './Button.module.scss';
import clsx from 'clsx';

function Button({ children, handleOnClick, type }) {
  return (
    <button onClick={handleOnClick} className={clsx(type === 'iconButton' ? styles.iconButton : styles.regularButton)}>
      {children}
    </button>
  );
}
export default Button;
