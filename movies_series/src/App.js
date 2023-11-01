import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { SeriesList } from './components/Programs/Series/SeriesList';
import { MoviesList } from './components/Programs/Movies/MoviesList';

function App() {
  return (
    <> 
      <Header /> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<SeriesList />} />
          <Route path="/movies" element={<MoviesList />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
