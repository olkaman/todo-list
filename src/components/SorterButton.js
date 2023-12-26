import React, { useState } from 'react';
import { ArrowUpToLine, ArrowDownToLine } from 'lucide-react';
import styles from './SorterButton.module.scss';

export default function SorterButton({ handleClick, label, isAscending }) {
  const [sorterResetted, setSorterResetted] = useState(true);

  const handleOnClick = () => {
    setSorterResetted(false);
    handleClick();
  };

  return (
    <button onClick={handleOnClick} className={styles.button}>
      {label}
      {!sorterResetted && (isAscending ? <ArrowDownToLine /> : <ArrowUpToLine />)}
    </button>
  );
}
