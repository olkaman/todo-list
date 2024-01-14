import React from 'react';
import { ArrowUpToLine, ArrowDownToLine } from 'lucide-react';
import styles from './SorterButton.module.scss';

export default function SorterButton({ handleClick, children, sortOrder, sortLabel, label }) {
  return (
    <button onClick={handleClick} className={styles.button}>
      {children}
      {label === sortLabel && (sortOrder === 'asc' ? <ArrowUpToLine /> : <ArrowDownToLine />)}
    </button>
  );
}
