import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Person from './components/Person';

function App() {

  const name = "John Black";

  return (
    <div className="App">
      <Person img="https://via.placeholder.com/150" name="Peter Blue" age="19" city="Blumenau-SC" />
      <SayMyName name="Carlos Jr"/>
      <SayMyName name={name}/>  
      <HelloWorld/>
    </div>
  );
}

export default App;
