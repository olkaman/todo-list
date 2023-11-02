import styles from './CustomCheckbox.module.scss';
import clsx from 'clsx';
import { Check } from 'lucide-react';

function CustomCheckbox({ checked, handleOnCheck, disabled }) {
  return (
    <button className={clsx(styles.checkBox, checked && styles.checkboxChecked)} onClick={handleOnCheck} disabled={disabled}>
      {checked ? <Check /> : null}
    </button>
  );
}

export default CustomCheckbox;
