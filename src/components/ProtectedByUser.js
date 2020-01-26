// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React, {useEffect} from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedByUser = ({ component: Component, match, authed, ...rest }) => {
  // Add your own authentication on the below line.

const Ico = () => {
  console.log(match)
}
  return (
    <Route
      {...rest}
      render={props =>
        1===1 ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default ProtectedByUser;
