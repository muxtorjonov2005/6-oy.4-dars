import { useState } from 'react';
import styles from './index.module.css'; 

function ReverseText() {
  const [text, setText] = useState(''); 
  const reverseString = (str) => str.split('').reverse().join(''); 

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} 
        placeholder="Matn yozing"
        className={styles.input}
      />
      <p className={styles.output}>Teskari: {reverseString(text)}</p>
    </div>
  );
}

export default ReverseText;
