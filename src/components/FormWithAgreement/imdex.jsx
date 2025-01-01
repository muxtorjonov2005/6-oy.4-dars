import { useState } from 'react';
import styles from './index.module.css'; 

function FormWithAgreement() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isChecked) {
      setError('Iltimos, "Shartlarga roziman" degan checkboxni belgilang.');
    } else {
      setError('');
      alert('Forma muvaffaqiyatli yuborildi!');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Forma</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Ism:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.checkboxGroup}>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
            />
            Shartlarga roziman
          </label>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.submitButton}>
          Yuborish
        </button>
      </form>
    </div>
  );
}

export default FormWithAgreement;
