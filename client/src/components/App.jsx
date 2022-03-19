import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
  }

  componentDidMount() {
    // this.get()
    this.post()
  }

  get() {
    axios.get('/api')
    .then(results => {
      console.log('results:', results)
    })

  }

  post() {
    axios.post('/api')
    .then(results => {
      console.log('results:', results)
    })

  }

  render() {
    return (
      <div>Primal Health Test</div>
    )
  }
}

export default App;