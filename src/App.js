import { useRef, useState } from 'react';
import './App.css';
import useRandomJoke from './useRandomJoke';

function App() {

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  
  const [name,setName] = useState({
    firstName: '',
    lastName: ''
  });

  const joke = useRandomJoke(name.firstName, name.lastName);

  const generateJoke = e => {
    e.preventDefault();
    setName({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value
  
    })
  }

  return (
    <div className="App">
      <center>
        <h1>The Joke Generator</h1>
        <h2>{joke}</h2>

        <form>
          <input type="text" placeholder="First Name" ref={firstNameRef} />
          <input type="text" placeholder="Last Name" ref={lastNameRef} />
          <button onClick={generateJoke}>Generate Joke</button>
        </form>
      </center>
    </div>
  );
}

export default App;
