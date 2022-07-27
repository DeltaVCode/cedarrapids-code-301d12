import React from 'react';

class Header extends React.Component {
render() {
  console.log(this.props.pizzas);
  return(

    <header> 
    {/* add emoji */}
      <h1>Pizza of 301 {this.props.pizzas} </h1>
    </header>
  );
}
}

export default Header;
