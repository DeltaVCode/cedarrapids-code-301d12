import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pizzaData: {},
      pizzaType: '',
      showPizza: false
    };
  }


  handleInput = (event) => {
    this.setState({
      pizzaType: event.target.value

    })
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    //create request url
    //http://localhost:3001/pizza?pizzatype=Chicago%20Pizza
    let url = `${process.env.REACT_APP_SERVER}/pizza?pizzatype=${this.state.pizzaType}`;
 
    let  pizzaData = await axios.get(url);
    console.log('pizza data: ',pizzaData.data);
    this.setState({
      pizzaData: pizzaData.data,
      error:false,
      showPizza: true
    })


  }


  render(){
    console.log(this.state.pizzaType);
    console.log('pizza from the server now in state.',this.state.pizzaData);
    return(
      <>
        <h1>Find Your Pizza</h1>
        <form onSubmit={this.handleSubmit}>
        <label>
          Search Pizza Type
          <input type="text" onChange={this.handleInput}/>
        </label>
          <button>Display Pet</button>
        </form>

        {
          this.state.showPizza && <p>{this.state.pizzaData.pizzaType} can be found in {this.state.pizzaData.location}</p>
        }
      </>


    )
  }
}




export default App;