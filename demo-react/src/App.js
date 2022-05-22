import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ListPost from './components/list-posts/ListPost';
import GameWrapper from './components/tic-tac-toe/GameWrapper';
import LifeCycle from './components/life-cycle/LifeCycle';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './NhanNguyen/Component/Container/Homepage';
import Cart from './NhanNguyen/Component/Container/Cart';
import Login from './NhanNguyen/Component/Container/Login';
import Signin from './NhanNguyen/Component/Container/Signin';

function App() {

  let [username, setUsername] = useState('thangnd');

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/life-cycle' element={<LifeCycle />} />
        <Route path="/tic-tac-toe" element={<GameWrapper />} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
