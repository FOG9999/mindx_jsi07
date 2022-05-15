import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ListPost from './components/list-posts/ListPost';
import GameWrapper from './components/tic-tac-toe/GameWrapper';
import LifeCycle from './components/life-cycle/LifeCycle';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './NhanNguyen/Component/Container/Homepage';

function App() {

  let [username, setUsername] = useState('thangnd');

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/life-cycle' element={<LifeCycle />} />
        <Route path="/tic-tac-toe" element={<GameWrapper />} />
        <Route path='/homepage' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
