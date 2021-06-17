import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Currency from './pages/currency';
function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" component={Currency} exact />
      </Switch>
    </Router>
  );
}

export default App;
