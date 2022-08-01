import React from "react";
// 3. talk about npm and axios and add it to our current package
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      starWarsChars: [],
      cityData: {},
      error: false,
      errorMessage: "",
    };
  }

  // 2. create ()
  // handleSubmit = (event) => {
  handleSubmit = async (event) => {
    event.preventDefault();

    // 14. Add error handling
    try {
      console.log("Submit Event: ", event);
      //4. Make request to star wars api
      let starWarsCharacters = await axios.get(
        "https://swapi.dev/api/people/?page=1"
      );
      //now lets get proof of life
      // console.log('Galactic Heros: ',starWarsCharacters);
      console.log("Galactic Heros: ", starWarsCharacters.data.results);
      //this is the response object lets compare the data online and in console.
      // we get back a promise. but why, because it is asyncroniesous so, we got to get js to chill for a second so we tell it its async

      //5. Then I want to take that data and add it to state.
      this.setState({
        starWarsChars: starWarsCharacters.data.results,
        error: false,
      });
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
      this.setState({
        error: true,
        errorMessage: `An error occurred: ${error.response.status}`,
      }); //go down to 15.
    }
  };

  // 8. locationiq and add env and env sample and look at the location array of objects look at the lat and lon
  // https://us1.locationiq.com/v1/search?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json
  // after looking at data add the extension for json https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en

  // 10. add getLocationData
  submitCityHandler = async (event) => {
    event.preventDefault();
    // make my request to my Api
    //Add onInput to input so go down to 11. then come back and finish

    // 12. add locIq url and fill in with our information
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.city}&format=json`;
    //  now lets save city results
    let cityInfo = await axios(url);
    // dont forget to add data
    console.log("City Info: ", cityInfo.data[0]);

    // Add city to state
    // 13. show the url for an image in the browser build out
    //https://maps.locationiq.com/v3/staticmap?key=pk.9314aed33e5b0e10955bf1b4fc8570ef&center=41.9758872,-91.6704053&zoom=12
  };

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value,
    });
    // If we call the api here we would have multiple calls to the server we only want to call the api once so once we have full value we make the call.
  };

  render() {
    // 6. console log the added state
    console.log("Star Wars STATE:", this.state.starWarsChars);
    console.log("onInput in STATE:", this.state.city);

    let startWarsList = this.state.starWarsChars.map((characterName, index) => {
      return <li key={index}>{characterName.name}</li>;
    });

    return (
      <>
        <h1>Data from an STAR WARS API</h1>
        {/* 1. add submit handler */}

        <form onSubmit={this.handleSubmit}>
          <button type="submit">Display Star Wars Data</button>
        </form>

        {/* 15. add error conditional  */}
        {/* WTF */}
        {this.state.error ? (
          <p>{this.state.errorMessage}</p> //render the error message
        ) : (
          // render the star wars
          <ul>{startWarsList}</ul>
        )}
        {/* 16. update handleSubmit to set error to false for next use  */}

        {/* 7. add ul and the list variable */}
        <ul>{startWarsList}</ul>

        {/* 9. add a new form  */}
        <form onSubmit={this.submitCityHandler}>
          <label>
            Pick a City:
            {/* 11. Add the onChange */}
            <input type="text" onChange={this.handleCityInput} />
          </label>
          <button type="submit">Get City Data</button>
        </form>
      </>
    );
  }
}

export default App;
