import { useState } from 'react';
import Button from './Button';
import { PlusSquare } from 'lucide-react';

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
    <div className='flex'>
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
      <Button design='iconButton' handleOnClick={handleOnAdd} icon={<PlusSquare />} />
    </div>
  );
}

export default AddNewTodo;
