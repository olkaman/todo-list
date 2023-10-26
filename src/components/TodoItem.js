import styles from './TodoItem.module.scss';
import clsx from 'clsx';
import Button from './Button';
import { useState } from 'react';

function TodoItem({ checked, task, handleOnCheck, setTaskValue, handleRemove }) {
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
    <div className={clsx('flex', styles.todoItem, isTaskEdited && styles.active)}>
      <div className='flex'>
        <input type='checkbox' checked={checked} onChange={handleOnCheck} name='checked' />
        {isTaskEdited ? (
          <input type='search' value={inputValue} onChange={handleOnEditTask} name='task' />
        ) : (
          <button className={styles.todoText} onClick={() => setIsTaskEdited(!isTaskEdited)}>
            {task}
          </button>
        )}
      </div>

      <div>
        {isTaskEdited ? (
          <>
            <Button handleOnClick={handleOnSave}>Save</Button>
            <Button handleOnClick={() => setIsTaskEdited(!isTaskEdited)}>Cancel</Button>
          </>
        ) : (
          <>
            <Button handleOnClick={handleRemove}>remove</Button>
          </>
        )}
      </div>
    </div>
  );
}
export default TodoItem;
