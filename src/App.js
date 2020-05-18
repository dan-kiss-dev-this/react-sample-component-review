import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import GrandChild, { MyChild} from './MyChild'

function App() {
  const [myNumber, setNumber] = useState(0)
  const adder = () => setTimeout(() => setNumber(myNumber+1),1000)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Number is {myNumber}.
        </p>
        <GrandChild number={myNumber} setNumber={adder}/>
      </header>
    </div>
  );
}

export default App;
