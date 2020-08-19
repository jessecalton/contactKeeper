import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  // If the user is notAuthenticated and is done loading, redirect them back to login page
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to='/login' />
        ) : (
          // Else, render whatever the component is, and any extra props
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
