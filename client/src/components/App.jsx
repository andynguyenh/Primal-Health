import React from 'react';
import Nutritional from './Nutritional.jsx'
import PersonalizeYourPlan from './PersonalizeYourPlan.jsx'
import VideoDetail from './VideoDetail.jsx'
import SupplierPage from './SupplierPage.jsx'
import Masthead from '../shared/Masthead.jsx'
import {BrowserRouter, Routes, Route, Link}  from "react-router-dom"

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//           <Route path="/blogs" element={<VideoDetail />} />
//           <Route path="/" element={<Nutritional />}>
//           <Route index element={<SupplierPage />} />
//           {/* <Route path="*" element={<NoPage />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );

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
        <PersonalizeYourPlan/>
        // <Masthead/>
    )
  }

}
// const App = () => {
//   return (
//     <div>
//     <div>Primal Health Test</div>
//     <Nutritional/>
//     <VideoDetail/>
//     <SupplierPage/>
//     </div>
//   )
// }

export default App;