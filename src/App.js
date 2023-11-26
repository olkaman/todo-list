import TodoItem from './components/TodoItem';
import './GlobalStyles.scss';
import './AppStyles.scss';
import { useEffect, useState } from 'react';
import AddNewTodo from './components/AddNewTodo';
import { Check, X } from 'lucide-react';
import Button from './components/Button';

// TODO
// local storage
// authorization
// backend
// number of characters
// responsiveness
// info, that all is done and if remove all tasks
// input field component

function App() {
  const [todosList, setTodosList] = useState([]);
  const numberOfDoneTasks = todosList.filter((item) => item.checked === true).length;
  const totalNumberOfTasks = todosList.length;
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (numberOfDoneTasks === 0) setShowMessage(false);
    setShowMessage(numberOfDoneTasks === totalNumberOfTasks);
  }, [numberOfDoneTasks, totalNumberOfTasks]);

  const editTaskValue = (updatedTodo) => {
    const newTodosList = todosList.map((todo) => {
      if (updatedTodo.id === todo.id) return updatedTodo;
      else return todo;
    });

    setTodosList(newTodosList);
  };
  console.log(showMessage);
  const handleAddTask = (task) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000000).toString(),
      task,
      checked: false,
    };

    setTodosList([...todosList, newTodo]);
  };

  const handleRemove = (id) => {
    const newTodosList = todosList.filter((item) => id !== item.id);
    setTodosList(newTodosList);
  };

  const resetTodosList = () => {
    setTodosList([]);
    setShowMessage(false);
  };

  console.log(todosList);
  return (
    <div className='appContainer'>
      <h2>Todo list</h2>
      <div className='remainingTasks'>
        Ready tasks: {numberOfDoneTasks} / {totalNumberOfTasks}
        {showMessage && (
          <div>
            Congratulations! All tasks are done! Do you want to remove the list?
            <Button handleOnClick={resetTodosList} icon={<Check />} />
            <Button handleOnClick={() => setShowMessage(false)} icon={<X />} />
          </div>
        )}
      </div>
      <AddNewTodo handleAddTask={handleAddTask} />
      {todosList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} editTaskValue={(updatedTodo) => editTaskValue(updatedTodo)} handleRemove={() => handleRemove(todo.id)} />
      ))}
    </div>
  );
}

export default App;
