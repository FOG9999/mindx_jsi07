import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ListPost from './components/list-posts/ListPost';
import GameWrapper from './components/tic-tac-toe/GameWrapper';

function App() {

  let [username, setUsername] = useState('thangnd');

  return (
    <div className="App">
      <GameWrapper />
    </div>
  );
}

export default App;
