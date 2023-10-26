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
  return (
    <div className='appContainer'>
      <h2>Todo list</h2>
      {todosList.map((item) => (
        <TodoItem key={item.id} checked={item.checked} task={item.task} />
      ))}
    </div>
  );
}

export default App;
