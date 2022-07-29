import React from 'react'

 class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: ''
    };
  }


handleInput = (event) => {
  this.setState({
    city: event.target.value
  });
};


handleSubmit = (event) => {
  event.preventDefault();
  console.log('On submit: ',this.state.city)

}



  render() {
    console.log('city stored in STATE',this.state.city);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Search for a City
              {/* if we used name="cityInput" then we could cityInput.value in the above function */}
            <input type="text" onInput={this.handleInput}/> 
           </label>
           <button>Find City</button>
        </form>
      </>
    )
  }
}
export default Main;