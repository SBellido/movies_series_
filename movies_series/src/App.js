import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { Series } from './Series/Series';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;
