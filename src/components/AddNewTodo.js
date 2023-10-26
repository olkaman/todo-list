import { useState } from 'react';
import Button from './Button';

function AddNewTodo({ addTask }) {
  const [isAdded, setIsAdded] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const showInput = () => {
    setIsAdded(true);
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnAdd = () => {
    addTask(inputValue);
    setInputValue('');
    setIsAdded(false);
  };

  return (
    <>
      {isAdded ? (
        <>
          <input value={inputValue} onChange={handleOnChange} />
          <Button handleOnClick={handleOnAdd}>Add</Button>
        </>
      ) : (
        <Button handleOnClick={showInput}>Add new</Button>
      )}
    </>
  );
}

export default AddNewTodo;
