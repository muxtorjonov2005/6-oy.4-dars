import { useState } from 'react';
import styles from './index.module.css'; 

function PasswordField() {
  const [password, setPassword] = useState(''); 
  const [showPassword, setShowPassword] = useState(false); 

  return (
    <div className={styles.container}>
      <input
        type={showPassword ? 'text' : 'password'} 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Parolni kiriting"
        className={styles.input}
      />
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="showPassword"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)} 
        />
        <label htmlFor="showPassword" className={styles.label}>
          Show Password
        </label>
      </div>
    </div>
  );
}

export default PasswordField;
