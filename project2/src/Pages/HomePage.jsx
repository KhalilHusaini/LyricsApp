import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${encodeURIComponent(searchTerm)}`);
  };
  
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Homepage</h1>
      <form className="homepage-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter song title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="homepage-input"
        />
        <button type="submit" className="homepage-button">Search</button>
      </form>
    </div>
  );
};

export default HomePage;
