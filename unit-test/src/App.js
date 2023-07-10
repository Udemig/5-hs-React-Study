import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './Counter';

function App() {
  const [btnColor, setBtnColor] = useState('red');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="App">
      <h2>Test Linki</h2>
      <a>Learn React</a>
      <h2>Test Butonu</h2>
      <button
        style={{ backgroundColor: btnColor }}
        onClick={() =>
          setBtnColor(btnColor === 'red' ? 'blue' : 'red')
        }
        disabled={isChecked}
      >
        Change to {btnColor === 'red' ? 'blue' : 'red'}
      </button>
      <input
        type="checkbox"
        onChange={() => setIsChecked(!isChecked)}
      />
      <label>Disable Button</label>

      <Counter />
    </div>
  );
}

export default App;
