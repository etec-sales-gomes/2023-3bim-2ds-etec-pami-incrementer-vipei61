import React from 'react';

const Button = ({ onIncrement, onDecrement }) => {
  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={onDecrement}>-</button>
      <button style={styles.button} onClick={onIncrement}>+</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100px',
  },
  button: {
    padding: '10px',
    fontSize: '18px',
  }
};

export default Button;