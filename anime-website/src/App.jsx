import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AnimeDetail from './pages/AnimeDetail';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div className="min-h-screen bg-netflix-black">
        <Header onSearch={handleSearch} />
        <Routes>
          <Route 
            path="/" 
            element={<Home searchQuery={searchQuery} />} 
          />
          <Route 
            path="/anime/:id" 
            element={<AnimeDetail />} 
          />
          <Route 
            path="/tv-shows" 
            element={<Home searchQuery="" />} 
          />
          <Route 
            path="/movies" 
            element={<Home searchQuery="" />} 
          />
          <Route 
            path="/new-releases" 
            element={<Home searchQuery="" />} 
          />
          <Route 
            path="/my-list" 
            element={<Home searchQuery="" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
