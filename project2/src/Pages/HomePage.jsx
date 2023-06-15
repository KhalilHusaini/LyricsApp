import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export default function({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
    navigate(`/search/${encodeURIComponent(searchTerm)}`);
  };
  
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Welcome to LyricSearch!</h1>
      <h2 className="homepage-sub">Find lyrics for any song</h2>
      <form className="homepage-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter song title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="homepage-input"
        />
        <button type="submit" className="homepage-button" disabled={!searchTerm}>Search</button>
      </form>
    </div>
  );
};


