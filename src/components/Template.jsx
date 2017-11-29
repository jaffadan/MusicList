import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './shared/Header.jsx';
import HomePage from './home/HomePage.jsx';
import ProfilePage from './account/ProfilePage.jsx';

export default function Template() {
  return (
    <Router>
      <div className="wrapper">
        <Header username="amonymous" />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/account/profile/:id" component={ProfilePage} />           
      </div>
    </Router>
  );
}
