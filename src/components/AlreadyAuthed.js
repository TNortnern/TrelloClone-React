// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React, {useEffect} from "react";
import { Redirect, Route } from "react-router-dom";

const AlreadyAuthed = ({ component: Component, authed, ...rest }) => {
  // Add your own authentication on the below line.
useEffect(() => {
  console.log(authed)
}, [authed])
  return (
    <Route
      {...rest}
      render={props =>
      !authed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/boards", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default AlreadyAuthed;
