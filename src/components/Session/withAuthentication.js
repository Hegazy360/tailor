import React from "react";
import { toast } from 'react-toastify';
import { withFirebase } from "components/Firebase";

import AuthUserContext from "./context";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: null
      };
    }

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          this.props.firebase
            .currentUser()
            .get()
            .then(snapshot => {
              if (snapshot.exists) {
                this.setState({ authUser: snapshot.data() });
                toast.success("Hello! Welcome back");
                return;
              }
            });
        }
        this.setState({ authUser: null });
      });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
