// views/main.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Services from './pages/Services';
import CreatePage from './pages/CreatePage';
import ListPage from './pages/ListPage';

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route path="/services" component={Services} />
        <Route path="/create" component={CreatePage} />
        <Route path="/list" component={ListPage} />
        {/* Другие маршруты */}
      </Switch>
    </Router>
  );
};

export default Main;
