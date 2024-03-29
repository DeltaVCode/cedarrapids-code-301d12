import React from 'react';
import axios from 'axios';
import './App.css';

let SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cats: []
    }
  }

  getCats = async () => {
    console.log('did we get here???');
    try {
      let results = await axios.get(`${SERVER}/cats`);
        console.log('results from api', results);
      this.setState({
        cats: results.data
      })
    } catch(error){
      console.log('we have an error: ', error.response.data)
    }
  }
 //net effect is that when the site loads (I should say this specific componenet loads), the data will be displayed the getCats will be invoked when component mounts after all its tasks. 
  componentDidMount(){
    this.getCats();
  }


  render() {
     console.log(this.state.cats);
    let cats = this.state.cats.map(cat => (
      <p key={cat._id}>{cat.name} is {cat.color}</p>
    ))
    return (
      <>
        <header>
          <h1>Cool Cats</h1>
        </header>
        <main>
        {
          this.state.cats.length > 0 &&
          <>
            {cats}
          </>
        }
        </main>
      </>
    );
  }
}

export default App;
