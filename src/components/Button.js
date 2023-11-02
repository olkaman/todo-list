import styles from './Button.module.scss';
import clsx from 'clsx';

function Button({ children, handleOnClick, design }) {
  return (
    <button onClick={handleOnClick} className={clsx(design === 'iconButton' && styles.iconButton)}>
      {children}
    </button>
  );
}
export default Button;
