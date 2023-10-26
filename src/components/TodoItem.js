import styles from './TodoItem.module.scss';
import clsx from 'clsx';
import Button from './Button';
import { useState } from 'react';

function TodoItem({ checked, task }) {
  const [isEdited, setIsEdited] = useState(false);
  const onEdit = () => {
    setIsEdited(true);
  };
  const onSave = () => {
    setIsEdited(false);
  };
  const onCancel = () => {
    setIsEdited(false);
  };
  const onRemove = () => {};
  return (
    <div className={clsx('flex', styles.todoItem)}>
      <div className='flex'>
        <input type='checkbox' checked={checked} />
        {isEdited ? <input type='text' value={task} /> : <p>{task}</p>}
      </div>

      <div>
        {isEdited ? (
          <>
            <Button handleOnClick={onSave}>Save</Button>
            <Button handleOnClick={onCancel}>Cancel</Button>
          </>
        ) : (
          <>
            <Button handleOnClick={onEdit}>Edit</Button>
            <Button handleOnClick={onRemove}>remove</Button>
          </>
        )}
      </div>
    </div>
  );
}
export default TodoItem;
