import { useState } from 'react';
import styles from './index.module.css'; 

function AddInputs() {
  const [inputs, setInputs] = useState([{ value: '' }]); 

  const handleAddInput = () => {
    setInputs([...inputs, { value: '' }]); 
  };

  const handleChange = (e, index) => {
    const newInputs = [...inputs];
    newInputs[index].value = e.target.value;
    setInputs(newInputs); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs.map(input => input.value)); 
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Inputlar qo'shish</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {inputs.map((input, index) => (
          <div key={index} className={styles.inputGroup}>
            <input
              type="text"
              value={input.value}
              onChange={(e) => handleChange(e, index)} 
              className={styles.input}
              placeholder={`Input ${index + 1}`}
              required
            />
          </div>
        ))}

        <button type="button" onClick={handleAddInput} className={styles.addButton}>
          Input qo'shish
        </button>
        <button type="submit" className={styles.submitButton}>
          Yuborish
        </button>
      </form>
    </div>
  );
}

export default AddInputs;
