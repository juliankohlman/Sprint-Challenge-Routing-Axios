import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      smurfs: [],
      error: '',
    };
  }

  loadSmurfs = () => {
    const endpoint = 'http://localhost:3333/smurfs';
    axios
      .get(endpoint)
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => {
        this.setState({ error: 'You messed up!!'})
      });
      // .then(res => this.setState({ smurfs: res.data })
      // .catch(err => this.setState({ error: 'You broke something!'})));
  }

  componentDidMount() {
    // this.loadSmurfs();
  }


  render() {
    return (
      <div className="App">
        <SmurfForm refresh={this.loadSmurfs}/>
        <Smurfs />
      </div>
    );
  }
}

export default App;
