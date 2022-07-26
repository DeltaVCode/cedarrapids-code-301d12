import React from 'react';
import Pizza from './Pizza.js';
import data from './data.json';
import './Main.css'

class Main extends React.Component {

  // how do we get this data out.
  render() {
  //   console.log('data',data);
  // do some js stuff before we return so let build components here
  let pizzas = [];
  data.forEach((newPizza, index) => {
    pizzas.push(<Pizza pie={newPizza.name} imageURL={newPizza.imageURL} key={index}     /> );

  });


    return (
      <main>
        {/* <Pizza pie="Detroit" />
        <Pizza pie="New York Thin"/>
        <Pizza pie="Chicago Deep Dish"/>
        <Pizza pie="Oven Grinder"/>
        <Pizza pie="Brick Oven"/>
        <Pizza pie="Calzone"/> */}

        {/* ADD */}
        {pizzas}
      </main>
    )
  }
}

export default Main;
