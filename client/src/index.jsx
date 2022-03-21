import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
// import Nutritional from "./components/Nutritional.jsx";
// import SupplierPage from "./components/SupplierPage.jsx";
// import VideoDetail from "./components/VideoDetail.jsx";
// import {BrowserRouter, Routes, Route}  from "react-router-dom"

//   const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Nutritional />}>
//           <Route index element={<SupplierPage />} />
//           <Route path="blogs" element={<VideoDetail />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App
ReactDOM.render(<App />, document.getElementById('app'));