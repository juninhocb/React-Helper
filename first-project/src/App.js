import './App.css';

function App() {

  const name = "John Green"; 
  const nameUppercase = name.toUpperCase(); 
  const imageUrl = "https://via.placeholder.com/150";

  function sum(a,b){
    return a + b; 
  }



  return (
    <div className="App">
      <h1> My initial project in React! Greetings.</h1>
      <p> The name of var is {nameUppercase}</p>
      <p> Soma: {sum(2,3)}</p>
      <img src={imageUrl} alt="my image"/>
    </div>
  );
}

export default App;
