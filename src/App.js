import TodoItem from './components/TodoItem';
import './GlobalStyles.scss';
import './AppStyles.scss';
import { useState } from 'react';

function App() {
  const [todosList, setTodosList] = useState([
    {
      id: '1',
      task: 'dsdsds',
      checked: true,
    },
    {
      id: '2',
      task: 'asasdas',
      checked: true,
    },
  ]);

  const handleOnCheck = (e, id) => {
    const newTodosList = todosList.map((item) => {
      console.log(e);
      if (id === item.id) {
        return { ...item, checked: e.target.checked };
      } else return item;
    });

    setTodosList(newTodosList);
  };

  const setTaskValue = (task, id) => {
    const newTodosList = todosList.map((item) => {
      if (id === item.id) return { ...item, task };
      else return item;
    });

    setTodosList(newTodosList);
  };

  const handleRemove = (id) => {
    const newTodosList = todosList.filter((item) => id !== item.id);
    setTodosList(newTodosList);
  };

  console.log(todosList);
  return (
    <div className='appContainer'>
      <h2>Todo list</h2>
      {todosList.map((item) => (
        <TodoItem
          key={item.id}
          checked={item.checked}
          task={item.task}
          handleOnCheck={(e) => handleOnCheck(e, item.id)}
          setTaskValue={(task) => setTaskValue(task, item.id)}
          handleRemove={() => handleRemove(item.id)}
        />
      ))}
    </div>
  );
}

export default App;
