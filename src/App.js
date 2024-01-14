import TodoItem from './components/TodoItem';
import './GlobalStyles.scss';
import styles from './AppStyles.module.scss';
import { useCallback, useEffect, useState } from 'react';
import AddNewTodo from './components/AddNewTodo';
import { getTasksFromLocalStorage, saveInLocalStorage } from './services/localStorage.service';
import Message from './components/Message';
import Sorters from './components/Sorters';

// TODO
// authorization
// backend
// responsiveness

function App() {
  const [todosList, setTodosList] = useState(
    useCallback(() => {
      const formLocalStorage = getTasksFromLocalStorage();
      return formLocalStorage ?? [];
    }, [])
  );

  useEffect(() => {
    saveInLocalStorage(todosList);
  }, [todosList]);

  const editTaskValue = (updatedTodo) => {
    const newList = todosList.map((todo) => {
      if (updatedTodo.id === todo.id) return updatedTodo;
      else return todo;
    });

    setTodosList(newList);
  };

  const handleAddTask = (task) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000000).toString(),
      task,
      checked: false,
      date: Date.now(),
    };
    const newList = [newTodo, ...todosList];
    setTodosList(newList);
  };

  const handleRemove = (id) => {
    const newList = todosList.filter((item) => id !== item.id);
    setTodosList(newList);
  };

  return (
    <div className={styles.appContainer}>
      <h2>Todo list</h2>
      <div className={styles.remainingTasks}>
        <Message todosList={todosList} setTodosList={setTodosList} />
      </div>
      <AddNewTodo handleAddTask={handleAddTask} />
      <Sorters todosList={todosList} setTodosList={setTodosList} />
      {todosList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} editTaskValue={(updatedTodo) => editTaskValue(updatedTodo)} handleRemove={() => handleRemove(todo.id)} />
      ))}
    </div>
  );
}

export default App;
