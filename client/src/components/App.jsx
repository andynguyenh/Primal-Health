import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.getTodos()
  }

  getTodos() {
    axios.get('/todos')
    .then(data => {
      console.log(data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>Primal Health Test</div>
    )
  }

}


export default App;