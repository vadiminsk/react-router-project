import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts';
import Profile from './components/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/profile'>Profile</Link>
      </header>
      <hr />
      <Route path='/' component={Home} exact />
      <Route path='/posts' component={Posts} />
      <Route path='/profile' component={Profile} />
    </BrowserRouter>
  );
};

export default App;
