import { withAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from './LoginButton.js';
import LogOutButton from './LogOutButton.js';
// import Profile from './Profile.js'
import Content from './Content.js';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Welcome to the site.</h1>
        {this.props.auth0.isAuthenticated ? (
          <LogOutButton />
        ) : (
          <LoginButton />
        )}
        {
          this.props.auth0.isAuthenticated ? <Content /> : <h2>Please Login</h2>
        }
      </>
    );
  }
}
export default withAuth0(App);
