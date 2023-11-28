import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Check, X } from 'lucide-react';
import styles from './Message.module.scss';

export default function Message({ todosList, setTodosList }) {
  const numberOfDoneTasks = todosList.filter((item) => item.checked === true).length;
  const totalNumberOfTasks = todosList.length;
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (todosList.length === 0) setShowMessage(false);
    else setShowMessage(numberOfDoneTasks === totalNumberOfTasks);
  }, [numberOfDoneTasks, totalNumberOfTasks, todosList]);

  const resetTodosList = () => {
    setTodosList([]);
    setShowMessage(false);
  };

  return (
    <>
      <p>
        Ready tasks: {numberOfDoneTasks} / {totalNumberOfTasks}
      </p>
      {showMessage && (
        <div className={styles.message}>
          <p className={styles.text}>Congratulations! All tasks are done! Do you want to remove the list?</p>
          <div className={styles.buttons}>
            <Button handleOnClick={resetTodosList} icon={<Check />} />
            <Button handleOnClick={() => setShowMessage(false)} icon={<X />} />
          </div>
        </div>
      )}
    </>
  );
}
