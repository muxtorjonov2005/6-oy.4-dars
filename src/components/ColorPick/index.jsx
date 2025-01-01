import { useState } from 'react';
import styles from './index.module.css'; 

function ColorPicker() {
  const [bgColor, setBgColor] = useState('#ffffff'); 

  return (
    <div
      className={styles.container}
      
    >
      <h1 className={styles.heading}>Rangni tanlang:</h1>
      <input
        type="color"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)} 
        style={{ backgroundColor: bgColor }} 
        className={styles.colorInput}
      />
      <p className={styles.text}>Tanlangan rang: {bgColor}</p>
    </div>
  );
}

export default ColorPicker;
