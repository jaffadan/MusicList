import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './shared/Header.jsx';
import HomePage from './home/HomePageContainer.jsx';
import LoginPage from './account/LoginPage.jsx';
import ProfilePage from './account/ProfilePage.jsx';

export default function Template(props) {
  return (
    <Router>
      <div className="wrapper">
        <Header username="amonymous" />
        <p>{props.progress}</p>
        <section className="page-content container-fluid">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/account/login" component={LoginPage} />
          <Route exact path="/account/profile/:id" component={ProfilePage} />           
        </section>
      </div>
    </Router>
  );
}
