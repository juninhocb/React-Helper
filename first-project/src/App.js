import './App.css';
import Form from './components/Form';
import Event from './components/Event';
import Condition from './components/Condition';
import TeamsList from './components/TeamsList';
import { useState } from 'react';
import YourName from './components/YourName';
import Greetings from './components/Greetings';

function App() {

  const teams = ['Palmeiras', 'Juventude', 'Goias'];

  const [name, setName] = useState();



  return (
    <div className="App">
      <YourName setName={setName}/>
      <Greetings name={name} />
    </div>
  );
}

export default App;
