import styles from './TodoItem.module.scss';
import clsx from 'clsx';
import Button from './Button';
import { useState } from 'react';

function TodoItem({ checked, task, handleOnCheck, setTaskValue }) {
  const [isTaskEdited, setIsTaskEdited] = useState(false);
  const [inputValue, setInputValue] = useState(task);

  const handleOnEditTask = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSave = () => {
    setIsTaskEdited(!isTaskEdited);
    setTaskValue(inputValue);
  };

  const onRemove = () => {};
  return (
    <div className={clsx('flex', styles.todoItem)}>
      <div className='flex'>
        <input type='checkbox' checked={checked} onChange={handleOnCheck} name='checked' />
        {isTaskEdited ? <input type='text' value={inputValue} onChange={handleOnEditTask} name='task' /> : <p onClick={() => setIsTaskEdited(!isTaskEdited)}>{task}</p>}
      </div>

      <div>
        {isTaskEdited ? (
          <>
            <Button handleOnClick={handleOnSave}>Save</Button>
            <Button handleOnClick={() => setIsTaskEdited(!isTaskEdited)}>Cancel</Button>
          </>
        ) : (
          <>
            <Button handleOnClick={onRemove}>remove</Button>
          </>
        )}
      </div>
    </div>
  );
}
export default TodoItem;
