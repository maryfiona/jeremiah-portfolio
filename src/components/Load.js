// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Intro from './Intro';
import MainPage from './MainPage'; // Replace this with your actual component name

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Intro} />
        <Route path="/main" component={App} />
      </Switch>
    </Router>
  );
};

export default App;
