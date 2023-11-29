import styles from './TextAreaField.module.scss';
import { useEffect, useRef } from 'react';

export default function TextAreaField({ handleOnSave, inputValue, setInputValue, placeholder, className }) {
  const currentNoOfChar = inputValue.length;
  const maxNoOfChar = 200;
  const ref = useRef(null);

  useEffect(() => {
    setTextArea();
  });

  const setTextArea = () => {
    if (ref.current.classList.contains(className)) {
      const height = ref.current.scrollHeight;
      ref.current.style.height = height + 'px';
      ref.current.style.overflow = 'hidden';
    }
  };

  const handleOnEditTask = (e) => {
    setInputValue(e.target.value);
    setTextArea();
  };

  return (
    <div className={styles.wrapper}>
      <textarea
        className={className}
        ref={ref}
        value={inputValue}
        onChange={handleOnEditTask}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            handleOnSave();
          }
        }}
        placeholder={placeholder}
        maxLength={maxNoOfChar}
        rows={1}
      />
      <div className={styles.noCharacters}>{`${currentNoOfChar} / ${maxNoOfChar}`}</div>
    </div>
  );
}
