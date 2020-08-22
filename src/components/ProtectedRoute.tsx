import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!localStorage.getItem("token")) {
          return <Redirect to="/login" />;
        } else {
          return <Component {...props} {...rest} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
