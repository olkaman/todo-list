import styles from './TodoItem.module.scss';
import clsx from 'clsx';
import Button from './Button';
import { useEffect, useRef, useState } from 'react';
import { Trash, Check, X } from 'lucide-react';
import CustomCheckbox from './CustomCheckbox';

function TodoItem({ checked, task, editTaskValue, handleRemove, todo }) {
  const [isTaskEdited, setIsTaskEdited] = useState(false);
  const [inputValue, setInputValue] = useState(todo.task);
  const [isChecked, setIsChecked] = useState(false);

  const handleOnEditTask = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSave = () => {
    setIsTaskEdited(!isTaskEdited);
    editTaskValue({ ...todo, task: inputValue });
  };

  const handleOnCheck = () => {
    setIsChecked(!isChecked);
    editTaskValue({ ...todo, checked: !isChecked });
  };

  return (
    <div className={clsx('flex', styles.todoItem, isTaskEdited && styles.active)}>
      <div className='flex'>
        <CustomCheckbox checked={isChecked} handleOnCheck={handleOnCheck} />
        {isTaskEdited ? (
          <input type='search' value={inputValue} onChange={handleOnEditTask} placeholder='Enter task name' />
        ) : (
          <button className={styles.todoText} onClick={() => setIsTaskEdited(!isTaskEdited)}>
            {todo.task !== '' ? todo.task : <i className={styles.taskPlaceholder}>Enter task name</i>}
          </button>
        )}
      </div>

      <div>
        {isTaskEdited ? (
          <>
            <Button handleOnClick={handleOnSave} design='iconButton'>
              <Check />
            </Button>
            <Button handleOnClick={() => setIsTaskEdited(!isTaskEdited)} design='iconButton'>
              <X />
            </Button>
          </>
        ) : (
          <>
            <Button handleOnClick={handleRemove} design='iconButton'>
              {<Trash />}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
export default TodoItem;
