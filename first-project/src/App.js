import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Person from './components/Person';
import List from './components/ListOfTeams';
import Event from './components/Event';
import Form from './components/Form';

function App() {

  const name = "John Black";

  return (
    <div className="App">
      <h1> Click button test</h1>
      <Event number={1} />
      <Event number={2}/>
      <Form/>
    </div>
  );
}

export default App;
