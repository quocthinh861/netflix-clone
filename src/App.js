import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Browse from './pages/browse';
import Home from './pages/home';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import AuthUser from './hooks/auth';
function App() {
  
  const user  = AuthUser();

  return (
    
    <Router>
      <Switch>
        <IsUserRedirect path='/signup' user={user}>
          <SignUp />
        </IsUserRedirect>

        <IsUserRedirect path='/signin' user={user}>
          <SignIn />
        </IsUserRedirect>

        <ProtectedRoute path='/browse' user={user}>
          <Browse></Browse>
        </ProtectedRoute>

        <IsUserRedirect path='/' user={user}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
