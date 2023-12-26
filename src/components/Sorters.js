import React from 'react';
import { useRef } from 'react';
import styles from './SorterButton.module.scss';
import SorterButton from './SorterButton';

export default function Sorters({ todosList, setTodosList }) {
  const isTextAscending = useRef(false);
  const isDateAscending = useRef(false);
  const isDone = useRef(false);

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
      return isDateAscending.current ? a.date - b.date : b.date - a.date;
    });

    setTodosList(newTodo);
  };

  const sortByDoneTask = () => {
    const newTodo = [...todosList];
    isDone.current = !isDone.current;

    newTodo.sort((a, b) => {
      return isDone.current ? a.checked - b.checked : b.checked - a.checked;
    });

    setTodosList(newTodo);
  };

  return (
    <div className={styles.buttons}>
      <SorterButton handleClick={sortTodosByTask} label='Sort by name' isAscending={isTextAscending.current} />
      <SorterButton handleClick={sortTodosByDate} label='Sort by date' isAscending={isDateAscending.current} />
      <SorterButton handleClick={sortByDoneTask} label='Sort by done' isAscending={isDone.current} />
    </div>
  );
}
