import { useState } from 'react';
import Button from './Button';
import { PlusSquare } from 'lucide-react';
import InputField from './InputField';

function AddNewTodo({ handleAddTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleOnAdd = () => {
    handleAddTask(inputValue);
    setInputValue('');
  };

  return (
    <div className='flex mb-5'>
      <InputField handleOnSave={handleOnAdd} inputValue={inputValue} setInputValue={setInputValue} placeholder='Add new task' />
      <Button design='iconButton' handleOnClick={handleOnAdd} icon={<PlusSquare />} />
    </div>
  );
}

export default AddNewTodo;
