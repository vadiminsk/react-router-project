import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts';
import Profile from './components/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={Home} exact />
      <Route path='/posts' component={Posts} />
      <Route path='/profile' component={Profile} />
    </BrowserRouter>
  );
};

export default App;
