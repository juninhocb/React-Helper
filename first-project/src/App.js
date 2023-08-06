import './App.css';
import Form from './components/Form';
import Event from './components/Event';
import Condition from './components/Condition';
import TeamsList from './components/TeamsList';

function App() {

  const teams = ['Palmeiras', 'Juventude', 'Goias'];

  return (
    <div className="App">
      <Condition />
      <TeamsList itens={teams}/>
      <TeamsList itens={[]}/>
    </div>
  );
}

export default App;
