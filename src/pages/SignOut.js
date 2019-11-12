import React from "react";
import { withFirebase } from "components/Firebase";

const SignOutButton = ({ firebase }) => (
  <p onClick={firebase.doSignOut}>
    Sign Out
  </p>
);
export default withFirebase(SignOutButton);
