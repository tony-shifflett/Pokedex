import logo from './logo.svg';
import './App.css';
import MyTeam from './components/MyTeam'
import Pokedex from './components/Pokedex'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Pokedex />
      <MyTeam />
    </div>
  );
}

export default App;
