import { withAuth0 } from "@auth0/auth0-react";
import React from "react";
import axios from "axios";

class Content extends React.Component {
  getCats = async () => {
    try {
      //build url
      if(this.props.auth0.isAuthenticated){
        //we need a token to send the the back end to prove we are authenticated
        //lets generate the token
        //json web token = JWT ( JOT                create token)
        const response = await this.props.auth0.getIdTokenClaims();
        const jwt = response.__raw;
        console.log('jwt', jwt);
        //make sure to remove this as it is a security risk
        //complete lab 15
        //now use axios via send a config bject to make our request
        const config = {
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: '/cats',
          header: {"Authorization": `Bearer ${jwt}`}
        }
        console.log('axios Config', config);
        const catResults = await axios(config);
        console.log("cat results", catResults.data);
      }
      // let url = `${process.env.REACT_APP_SERVER_URL}/cats`;
      // const catResults = await axios.get(url);
    
    } catch (error) {
      console.error(error.message);
    }
  };
 //we need to let the back end know that the front end recieved its toden so we need to pass it to the server. 
  componentDidMount(){
    this.getCats();
  }

  render() {
    console.log("user data: ", this.props.auth0.user);
    return <div>Content</div>;
  }
}

export default withAuth0(Content);
