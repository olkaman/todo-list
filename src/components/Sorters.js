import React from 'react';
import { useRef } from 'react';
import { ArrowUpToLine, ArrowDownToLine } from 'lucide-react';
import styles from './SorterButton.module.scss';
import SorterButton from './SorterButton';

export default function Sorters({ todosList, setTodosList }) {
  const isTextAscending = useRef(false);
  const isDateAscending = useRef(false);

  const sortTodosByTask = () => {
    const newTodo = [...todosList];
    isTextAscending.current = !isTextAscending.current;

    newTodo.sort((a, b) => {
      const task1 = a.task.toLowerCase();
      const task2 = b.task.toLowerCase();
      return isTextAscending.current ? task1.localeCompare(task2) : task2.localeCompare(task1);
    });

    setTodosList(newTodo);
  };

  const sortTodosByDate = () => {
    const newTodo = [...todosList];
    isDateAscending.current = !isDateAscending.current;

    newTodo.sort((a, b) => {
      const task1 = a.date;
      const task2 = b.date;

      return isDateAscending.current ? task1 - task2 : task2 - task1;
    });

    setTodosList(newTodo);
  };

  return (
    <div className={styles.buttons}>
      <SorterButton handleClick={sortTodosByTask} label='Sortuj alfabetycznie' isAscending={isTextAscending.current} />
      <SorterButton handleClick={sortTodosByDate} label='Sortuj datami' isAscending={isDateAscending.current} />
    </div>
  );
}
