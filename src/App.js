import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Add from './components/Add';
import Header from './components/Header';
import Watched from './components/Watched';
import WatchList from './components/WatchList';
import { GlobalProvider } from './store/global-state';
import './lib/font-awesome/css/all.min.css';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path='/'>
            <WatchList />
          </Route>

          <Route exact path='/Watched'>
            <Watched />
          </Route>

          <Route exact path='/Add'>
            <Add />
          </Route>

        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
