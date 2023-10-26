import { useState } from 'react';
import Button from './Button';

function AddNewTodo({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnAdd = () => {
    addTask(inputValue);
    setInputValue('');
  };

  return (
    <>
      <input
        placeholder='Add new task'
        type='search'
        value={inputValue}
        onChange={handleOnChange}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            handleOnAdd();
          }
        }}
      />
      <Button handleOnClick={handleOnAdd}>Add</Button>
    </>
  );
}

export default AddNewTodo;
