import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Person from './components/Person';
import List from './components/ListOfTeams';

function App() {

  const name = "John Black";

  return (
    <div className="App">
      <List />
      <Person img="https://via.placeholder.com/150" name="Peter Blue" age="19" city="Blumenau-SC" />
      <SayMyName name="Carlos Jr"/>
      <SayMyName name={name}/>  
      <HelloWorld/>
    </div>
  );
}

export default App;
