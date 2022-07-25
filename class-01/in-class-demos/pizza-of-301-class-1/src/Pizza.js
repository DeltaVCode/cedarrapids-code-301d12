import React from 'react';

class Person extends React.Component {
  render() {
    return (
      <article>
        <h3>{this.props.pie}</h3>
        <p>Is this your favorite pizza</p>
      </article>
    )
  }
}

export default Person;
