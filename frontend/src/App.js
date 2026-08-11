import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Expense from './components/Expense';
import LandingPage from './components/LandingPage';
import AuthRoute from './components/AuthRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <AuthRoute path="/signin" component={SignIn} isProtected={false} />
        <AuthRoute path="/signup" component={SignUp} isProtected={false} />
        <AuthRoute path="/expense" component={Expense} isProtected={true} />
      </Switch>
    </Router>
  );
}

export default App;
