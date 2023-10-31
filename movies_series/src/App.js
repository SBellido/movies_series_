import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Series } from './components/Products/Series/Series';
import { Movies } from './components/Products/Movies/Movies';

function App() {
  return (
    <> 
      <Header /> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
