import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, isProtected, ...rest }) => {
  const token = localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={(props) => {
        // Protected route: user must be logged in
        if (isProtected && !token) {
          return <Redirect to="/signin" />;
        }

        // Public route: redirect to home if already logged in
        if (!isProtected && token) {
          return <Redirect to="/" />;
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default AuthRoute;
