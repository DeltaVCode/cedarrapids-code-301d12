import React from 'react';
import Pizza from './Pizza.js';
import './Main.css';
import { Container, Row} from 'react-bootstrap';

class Main extends React.Component {
  render () {
    console.log('function passed as prop',this.props.handleOnShowModal)

    // let pizzas = [];
    let pizzas = this.props.data.map((newPizza,index) => {
      // pizzas.push(

      return <Pizza 
        pizzaName={newPizza.name}
        key={index}
        image_URL={newPizza.imageURL}
        addPizza={this.props.addPizza}
        handleOnShowModal={this.props.handleOnShowModal}
        />
        // )
    });

    return(

      <main> 
        <Container>
        <Row lg={4} md={3} sm={2} xs={1}>
          {pizzas}
        </Row>
        </Container>
      </main>
    );
  }
}

export default Main;