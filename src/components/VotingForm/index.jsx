import { useState } from 'react';
import styles from './index.module.css'; 
function VotingForm() {
  const [votes, setVotes] = useState({
    javascript: 0,
    python: 0,
    java: 0,
  });
  const [selectedOption, setSelectedOption] = useState('');

  const handleVote = (e) => {
    const selected = e.target.value;
    setSelectedOption(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption) {
      setVotes((prevVotes) => ({
        ...prevVotes,
        [selectedOption]: prevVotes[selectedOption] + 1, 
      }));
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Dasturlash tili uchun ovoz bering</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              value="javascript"
              checked={selectedOption === 'javascript'}
              onChange={handleVote}
              className={styles.radio}
            />
            JavaScript
          </label>
          <label>
            <input
              type="radio"
              value="python"
              checked={selectedOption === 'python'}
              onChange={handleVote}
              className={styles.radio}
            />
            Python
          </label>
          <label>
            <input
              type="radio"
              value="java"
              checked={selectedOption === 'java'}
              onChange={handleVote}
              className={styles.radio}
            />
            Java
          </label>
        </div>

        <button type="submit" className={styles.submitButton}>
          Ovoz berish
        </button>
      </form>

      <div className={styles.results}>
        <h2 className={styles.resultsHeading}>Ovozlar natijalari:</h2>
        <p>JavaScript: {votes.javascript} ovoz</p>
        <p>Python: {votes.python} ovoz</p>
        <p>Java: {votes.java} ovoz</p>
      </div>
    </div>
  );
}

export default VotingForm;
