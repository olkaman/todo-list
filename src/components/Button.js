import styles from './TodoItem.module.scss';
import clsx from 'clsx';

function Button({ children, handleOnClick }) {
  return <button onClick={handleOnClick}>{children}</button>;
}
export default Button;
