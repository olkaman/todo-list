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
    <div className={clsx('flex', styles.todoItem, isTaskEdited && styles.active, isChecked && styles.isDone)}>
      <div className='flex spaceBetween'>
        {!isTaskEdited && <CustomCheckbox checked={isChecked} handleOnCheck={handleOnCheck} disabled={todo.task === ''} />}
        {isTaskEdited ? (
          <div className='flex spaceBetween'>
            <input type='search' value={inputValue} onChange={handleOnEditTask} placeholder='Enter task name' />
            <div className='flex'>
              <Button handleOnClick={handleOnSave} icon={<Check />} />
              <Button handleOnClick={() => setIsTaskEdited(!isTaskEdited)} icon={<X />} />
            </div>
          </div>
        ) : (
          <div className='flex spaceBetween'>
            <button className={styles.todoText} onClick={() => setIsTaskEdited(!isTaskEdited)} disabled={isChecked}>
              {todo.task !== '' ? todo.task : <i className={styles.taskPlaceholder}>Enter task name</i>}
            </button>
            <Button handleOnClick={handleRemove} icon={<Trash />} />
          </div>
        )}
      </div>
    </div>
  );
}
export default TodoItem;
