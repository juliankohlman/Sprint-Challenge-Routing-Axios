import React, { Component } from 'react';
import axios from 'axios';
import Smurf from './Smurf';

class Smurfs extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming


  state = {
    smurfs: []
  }

  componentDidMount() {
    const endpoint = 'http://localhost:3333/smurfs';

    axios.get(endpoint)
      .then(res =>  {
        this.setState({ smurfs: res.data})
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.smurfs.length === 0) return <h3>You've got the village all to yourself.</h3>
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
      {/* render an h3 with message if smurfs empty*/}
          { this.state.smurfs.map((smurf) => {
            return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Smurfs;