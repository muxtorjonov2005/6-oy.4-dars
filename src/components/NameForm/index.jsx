import { useState } from 'react';
import styles from './index.module.css';

function NameForm() {
  const [name, setName] = useState('');
  const [nameList, setNameList] = useState([]);

  const handleAddName = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setNameList([...nameList, name]);
      setName('');
    }
  };

  const handleClearList = () => {
    setNameList([]);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleAddName}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ismingizni kiriting"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Qo'shish
        </button>
        
      </form>
      {nameList.length > 0 && (
        <>
          <ul className={styles.nameList}>
            {nameList.map((item, index) => (
              <li key={index} className={styles.nameItem}>
                {item}
              </li>
            ))}
          </ul>

          <button onClick={handleClearList} className={`${styles.button} ${styles.clearButton}`}>
            Ro'yxatni tozalash
          </button>
        </>
      )}
    </div>
  );
}

export default NameForm;
