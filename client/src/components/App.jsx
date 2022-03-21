import React from 'react';
import Nutritional from './Nutritional.jsx'
import VideoDetail from './VideoDetail.jsx'
import SupplierPage from './SupplierPage.jsx'
import {BrowserRouter, Routes, Route, Link}  from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/blogs" element={<VideoDetail />} />
          <Route path="/" element={<Nutritional />}>
          <Route index element={<SupplierPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
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