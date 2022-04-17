import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ListPost from './components/list-posts/ListPost';

function App() {

  let [username, setUsername] = useState('thangnd');

  return (
    <div className="App">
      <ListPost />
    </div>
  );
}

export default App;
