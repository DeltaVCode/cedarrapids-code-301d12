import React from 'react';
import './Pizza.css';
import Button from 'react-bootstrap/Button';


class Pizza extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //can have several properties. 
      //Count likes
      likes: 0,
      //assign default values to make state more readable.
      //global variable would update only one value and not render state is for the comp
      pizzaNeed: false
    };
  };

  handleLikes = () => {
    //method allows us to set state
    this.setState({
      likes: this.state.likes + 1,
      //could add things to state here 
      // bananas: 'Thats Bananas',
    });
  };

  pizzaNeeded = () => {
    this.setState({
      pizzaNeed: true
    });
  }

  pizzaGot = ()=> {
    this.setState({
      pizzaNeed: false
    });
  }


  render() {
    return (
      // 1. we need to render all pizza names and images
      <article>
        <h3>{this.props.pie}</h3>
        <p>{this.state.likes} Likes</p>
        <p onClick={this.handleLikes}>Click to Like this pizza?</p>
        {/* so lets create an event handler 
            dont do normally this is made for react, not html.
        */}

        <img src={this.props.imageURL} alt={this.props.pie} title={this.props.pie}/>
        {/* <p>{this.state.bananas}</p> */}

        {/* conditional rendering for our button */}
        {/* message to appear if pizza is awesome */}
        {/* 
        Ternary Operator
        What? True : False 
        BooleanValue ? console.log('true') : console.log('false');
        */}
        <div>{this.state.pizzaNeed ? 'I need Pizza!' : ''}</div>
        <Button onClick={this.pizzaNeeded}>I need pizza!</Button>
        <Button variant="success" onClick={this.pizzaGot}>I got pizza!</Button>

        {/* <button>html button</button> */}
      </article>

    )
  }
}

export default Pizza;
