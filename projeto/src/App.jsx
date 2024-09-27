import React, { useState } from 'react';
import Button from './components/Button';

function App() {
  const [value, setValue] = useState(0);


  const handleIncrement = () => setValue(value + 1);

  const handleDecrement = () => setValue(value - 1);

  return (
    <div style={styles.appContainer}>
      <Button onIncrement={handleIncrement} onDecrement={handleDecrement} />
      <div style={styles.valueContainer}>
        <p style={styles.value}>{value}</p>
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '50px',
  },
  valueContainer: {
    marginTop: '20px',
    fontSize: '24px',
  },
  value: {
    fontWeight: 'bold',
  },
};

export default App;