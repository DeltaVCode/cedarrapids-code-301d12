import React from 'react';
import Pizza from './Pizza.js';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Pizza pie="Detroit" toppings="Cheese" crust="Detroit Style"/>
        <Pizza pie="New York Thin"/>
        <Pizza pie="Chicago Deep Dish"/>
        <Pizza pie="Oven Grinder"/>
        <Pizza pie="Brick Oven"/>
        <Pizza pie="Calzone"/>
      </main>
    )
  }
}

export default Main;
