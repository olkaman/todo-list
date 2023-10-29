import styles from './TodoItem.module.scss';
import clsx from 'clsx';
import Button from './Button';
import { useState } from 'react';
import { Trash } from 'lucide-react';

function TodoItem({ checked, task, editTaskValue, handleRemove, todo }) {
  const [isTaskEdited, setIsTaskEdited] = useState(false);
  const [inputValue, setInputValue] = useState(todo.task);

  const handleOnEditTask = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSave = () => {
    setIsTaskEdited(!isTaskEdited);
    editTaskValue({ ...todo, task: inputValue });
  };

  const handleOnCheck = (e) => {
    editTaskValue({ ...todo, checked: e.target.checked });
  };

  return (
    <div className={clsx('flex', styles.todoItem, isTaskEdited && styles.active)}>
      <div className='flex'>
        <input type='checkbox' checked={todo.checked} onChange={handleOnCheck} />
        {isTaskEdited ? (
          <input type='search' value={inputValue} onChange={handleOnEditTask} />
        ) : (
          <button className={styles.todoText} onClick={() => setIsTaskEdited(!isTaskEdited)}>
            {todo.task !== '' ? todo.task : <i className={styles.taskPlaceholder}>Enter task name</i>}
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
            <Button handleOnClick={handleRemove} type='iconButton'>
              {<Trash />}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
export default TodoItem;
