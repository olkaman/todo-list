import TodoItem from './components/TodoItem';
import './GlobalStyles.scss';
import './AppStyles.scss';
import { useState } from 'react';
import AddNewTodo from './components/AddNewTodo';

function App() {
  const [todosList, setTodosList] = useState([]);

  const editTaskValue = (updatedTodo) => {
    const newTodosList = todosList.map((todo) => {
      if (updatedTodo.id === todo.id) return updatedTodo;
      else return todo;
    });

    setTodosList(newTodosList);
  };

  const addTask = (task) => {
    const newTodo = {
      id: (Math.random() * 100000).toString(),
      task,
      checked: false,
    };

    setTodosList([...todosList, newTodo]);
  };

  const handleRemove = (id) => {
    const newTodosList = todosList.filter((item) => id !== item.id);
    setTodosList(newTodosList);
  };

  console.log(todosList);
  return (
    <div className='appContainer'>
      <h2>Todo list</h2>
      <AddNewTodo addTask={addTask} />
      {todosList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} editTaskValue={(updatedTodo) => editTaskValue(updatedTodo)} handleRemove={() => handleRemove(todo.id)} />
      ))}
    </div>
  );
}

export default App;
