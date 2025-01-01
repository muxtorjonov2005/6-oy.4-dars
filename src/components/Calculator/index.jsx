import { useState } from 'react';
import styles from './index.module.css'; 

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('sum'); 

  const handleChangeNum1 = (e) => setNum1(e.target.value);
  const handleChangeNum2 = (e) => setNum2(e.target.value);

  const handleOperationChange = (e) => setOperation(e.target.value);

  const calculateResult = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) return;

    let calcResult;
    if (operation === 'sum') {
      calcResult = number1 + number2;
    } else if (operation === 'multiply') {
      calcResult = number1 * number2;
    }

    setResult(calcResult);
  };

  React.useEffect(() => {
    calculateResult();
  }, [num1, num2, operation]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Kalkulyator</h1>
      <div className={styles.form}>
        <input
          type="number"
          value={num1}
          onChange={handleChangeNum1}
          className={styles.input}
          placeholder="Birinchi son"
        />
        <input
          type="number"
          value={num2}
          onChange={handleChangeNum2}
          className={styles.input}
          placeholder="Ikkinchi son"
        />
        <div className={styles.operationGroup}>
          <label>
            <input
              type="radio"
              value="sum"
              checked={operation === 'sum'}
              onChange={handleOperationChange}
              className={styles.radio}
            />
            Yig'indi
          </label>
          <label>
            <input
              type="radio"
              value="multiply"
              checked={operation === 'multiply'}
              onChange={handleOperationChange}
              className={styles.radio}
            />
            Ko'paytma
          </label>
        </div>
        <div className={styles.result}>
          {result !== null ? (
            <p>Natija: {result}</p>
          ) : (
            <p>Natija ko'rsatilmoqda...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
