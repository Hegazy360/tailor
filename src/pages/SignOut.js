import React from "react";
import { withFirebase } from "components/Firebase";

const SignOutButton = ({ firebase }) => (
  <button className="button" type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);
export default withFirebase(SignOutButton);
