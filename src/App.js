import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import PostItem from './components/PostItem';
import Posts from './components/Posts';
import Profile from './components/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Switch>
          <Route path='/posts/:id' component={PostItem} />
          <Route path='/posts' component={Posts} />
          <Route path='/profile' component={Profile} />
          <Route path='/' exact ncomponent={Home} />
          <Route render={() => <h3>This page is not exist</h3>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
