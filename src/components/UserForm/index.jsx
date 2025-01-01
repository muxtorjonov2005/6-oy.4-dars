import { useState } from 'react';
import styles from './index.module.css'; 

function UserForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      birthDate,
      gender,
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Foydalanuvchi Ma'lumotlari</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="firstName">Ism:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="lastName">Familiya:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="birthDate">Tug'ilgan sana:</label>
          <input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Jins:</label>
          <div>
            <label>
              <input
                type="radio"
                value="male"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
                required
              />
              Erkak
            </label>
            <label>
              <input
                type="radio"
                value="female"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
              />
              Ayol
            </label>
            <label>
              <input
                type="radio"
                value="other"
                checked={gender === 'other'}
                onChange={() => setGender('other')}
              />
              Boshqa
            </label>
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Yuborish
        </button>
      </form>
    </div>
  );
}

export default UserForm;
