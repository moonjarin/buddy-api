import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './components/Details/Details';
import Users from './components/Users/Users';

function App() {
  return (
    <div >
      <Header></Header>
      <Router>
      <Switch>
          <Route path="/posts">
          <Posts></Posts>
          </Route>
          <Route path="/Users">
            <Users></Users>
          </Route>
          <Route path="/:postid">
          <Details></Details>
          </Route>
          <Route path="/">
            <Posts></Posts>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
