import styles from './TodoItem.module.scss';
import clsx from 'clsx';
import Button from './Button';
import { useState } from 'react';
import { Trash, Check, X } from 'lucide-react';
import CustomCheckbox from './CustomCheckbox';
import TextAreaField from './TextAreaField';

function TodoItem({ editTaskValue, handleRemove, todo }) {
  const [isTaskEdited, setIsTaskEdited] = useState(false);
  const [inputValue, setInputValue] = useState(todo.task);
  const [isChecked, setIsChecked] = useState(todo.checked);

  const handleOnSave = () => {
    setIsTaskEdited(!isTaskEdited);
    editTaskValue({ ...todo, task: inputValue });
  };

  const handleOnCheck = () => {
    setIsChecked(!isChecked);
    editTaskValue({ ...todo, checked: !isChecked });
  };

  return (
    <div className={clsx('flex', styles.todoItem, isTaskEdited && styles.active, todo.checked && styles.isDone)}>
      <div className='flex spaceBetween'>
        {!isTaskEdited && <CustomCheckbox checked={todo.checked} handleOnCheck={handleOnCheck} disabled={todo.task === ''} />}
        {isTaskEdited ? (
          <div className='flex spaceBetween'>
            <TextAreaField className={todo.id} handleOnSave={handleOnSave} inputValue={inputValue} setInputValue={setInputValue} placeholder='Edit task name' />
            <div className='flex'>
              <Button handleOnClick={handleOnSave} icon={<Check />} />
              <Button handleOnClick={() => setIsTaskEdited(!isTaskEdited)} icon={<X />} />
            </div>
          </div>
        ) : (
          <div className='flex spaceBetween'>
            <button className={styles.todoText} onClick={() => setIsTaskEdited(!isTaskEdited)} disabled={todo.checked}>
              {todo.task !== '' ? todo.task : <i className={styles.taskPlaceholder}>Enter task name</i>}
            </button>
            <p className={styles.date}>{new Date(todo.date).toLocaleString()}</p>
            <Button handleOnClick={handleRemove} icon={<Trash />} />
          </div>
        )}
      </div>
    </div>
  );
}
export default TodoItem;
