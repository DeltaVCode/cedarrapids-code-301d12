import React from "react";
import { ListGroup, ListGroupItem, Form } from "react-bootstrap";

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      howToSort: "",
      sortedData: data,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let userName = event.target.userName.value;
    let selected = event.target.selected.value;

    console.log("userName and selected:", userName, selected);

    //add to state
    this.setState({
      userName: userName,
      howToSort: selected,
    });
    console.log("From state called in submit handler: ", this.state.userName);
  };

  handleInput = (event) => {
    //we dont need to prevent
    let userName = event.target.value;
    console.log("handleInput", userName);
  };

  handleSelect = (event) => {
    let selected = event.target.value;
    console.log("selected option", selected);
    if (selected === "even") {
      let newData = data.filter((number) => number % 2 === 0);
      this.setState({ sortedData: newData });
    } else if (selected === "odd") {
      let newData = data.filter((number) => number % 2 === 1);
      this.setState({ sortedData: newData });
    } else {
      // add update to
      this.setState({ sortedData: data });
    }
  };

  render() {
    // console.log('do we have state: ',this.state.howToSort);
    let numbers = this.state.sortedData.map((number, index) => {
      return (
        <ListGroupItem key={index}>
          {number} - {this.state.sortedData[index]}
        </ListGroupItem>
      );
    });

    return (
      <>
        <header>Forms in React</header>
        <main className="create-our-own">
          <ListGroup>{numbers}</ListGroup>

          <Form onSubmit={this.handleSubmit}>

            <Form.Label>
              <Form.Control type="text" name="userName" onInput={this.handleInput} />
            </Form.Label>

           <Form.Group>
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="text"/>
           </Form.Group>

           <Form.Label> Last Name:</Form.Label>
           <Form.Control type="text"/>
           
           <Form.Group>
              <p>Selected Numbers</p>
              <Form.Select name="selected" onChange={this.handleSelect}>
                <option value="all">All</option>
                <option value="even">Even</option>
                <option value="odd">Odd</option>
              </Form.Select>
              </Form.Group>
           
            {/* how do we submit a form, there are several ways this is similar to
                201 lets add a button, add the type for react be explicit for reacts sake
                So now add event listener just like on click */}
            <button type="submit">Submit</button>
          </Form>
        </main>
      </>
    );
  }
} //closes class

export default App;
