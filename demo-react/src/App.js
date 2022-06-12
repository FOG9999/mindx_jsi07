import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ListPost from './components/list-posts/ListPost';
import GameWrapper from './components/tic-tac-toe/GameWrapper';
import LifeCycle from './components/life-cycle/LifeCycle';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from './NhanNguyen/Component/Container/Homepage';
import Cart from './NhanNguyen/Component/Container/Cart';
import Login from './NhanNguyen/Component/Container/Login';
import Signup from './NhanNguyen/Component/Container/Signup';
import Item from './NhanNguyen/Component/Container/Item';

function App() {

  let [username, setUsername] = useState('thangnd');

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/life-cycle' component={LifeCycle} />
        <Route path="/tic-tac-toe" component={GameWrapper} />
        <Route path='/homepage' component={Homepage} />
        <Route path='/cart' component={Cart} />
        <Route path='/login' component={Login} />
        <Route path='/signin' component={Signup} />
        <Route path='/item/:id' component={Item} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
