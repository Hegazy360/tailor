import React from "react";
import AuthUserContext from "./context";
import { withFirebase } from "components/Firebase";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: null
      };
    }

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(() => {
        this.props.firebase
          .currentUser()
          .get()
          .then(snapshot => {
            console.log(snapshot.data());
            snapshot.exists
              ? this.setState({ authUser: snapshot.data() })
              : this.setState({ authUser: null });
          });
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
