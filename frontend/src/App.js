import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </Provider>
  );
}

export default App;
