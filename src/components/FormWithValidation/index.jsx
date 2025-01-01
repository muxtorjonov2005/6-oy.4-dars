import { useState } from 'react';
import styles from './index.module.css'; 

function FormWithValidation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = { name: '', email: '', phone: '' };

    if (!formData.name) {
      newErrors.name = 'Ismni kiriting';
      formIsValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Emailni kiriting';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email formatini tekshiring';
      formIsValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = 'Telefon raqamini kiriting';
      formIsValid = false;
    } else if (!/^\d{12}$/.test(formData.phone)) {
      newErrors.phone = 'Telefon raqami 12 raqamdan iborat bo\'lishi kerak';
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Forma muvaffaqiyatli yuborildi!');
    } else {
      alert('Iltimos, barcha maydonlarni to\'ldiring!');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Kontakt Ma'lumotlarini Kiritish</h1>
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
          {errors.name && <p className={styles.error}>{errors.name}</p>}
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
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Telefon raqami:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
            placeholder='Telefon raqam shu kabi bolsin 998*******'
          />
          {errors.phone && <p className={styles.error}>{errors.phone}</p>}
        </div>

        <button type="submit" className={styles.submitButton}>
          Yuborish
        </button>
      </form>
    </div>
  );
}

export default FormWithValidation;
