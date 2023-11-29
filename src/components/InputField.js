import styles from './TextAreaField.module.scss';

export default function InputField({ handleOnSave, inputValue, setInputValue, placeholder }) {
  const currentNoOfChar = inputValue.length;
  const maxNoOfChar = 200;

  const handleOnEditTask = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <input
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
