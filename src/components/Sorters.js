import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './SorterButton.module.scss';
import SorterButton from './SorterButton';

export default function Sorters({ todosList, setTodosList }) {
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortLabel, setSortLabel] = useState('task');

  const handleSorting = (column) => {
    if (column === sortLabel) {
      console.log('am here');
      setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortLabel(column);
      setSortOrder('asc');
      console.log(column);
    }
  };

  useEffect(() => {
    const newTodo = [...todosList];

    newTodo.sort((a, b) => {
      let valueA, valueB;
      if (sortLabel === 'task') {
        valueA = a[sortLabel].toLowerCase();
        valueB = b[sortLabel].toLowerCase();
      } else {
        valueA = a[sortLabel];
        valueB = b[sortLabel];
      }

      console.log(valueA, valueB);
      if (sortOrder === 'asc') {
        return valueA < valueB ? -1 : 1;
      } else {
        return valueA > valueB ? -1 : 1;
      }
    });

    setTodosList(newTodo);
  }, [sortOrder, sortLabel]);

  return (
    <div className={styles.buttons}>
      <SorterButton label='task' sortOrder={sortOrder} sortLabel={sortLabel} handleClick={() => handleSorting('task')}>
        Sort by task name
      </SorterButton>
      <SorterButton label='date' sortOrder={sortOrder} sortLabel={sortLabel} handleClick={() => handleSorting('date')}>
        Sort by date
      </SorterButton>
      <SorterButton label='checked' sortOrder={sortOrder} sortLabel={sortLabel} handleClick={() => handleSorting('checked')}>
        Sort by status
      </SorterButton>
    </div>
  );
}
