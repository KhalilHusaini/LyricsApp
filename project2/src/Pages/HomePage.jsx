import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${encodeURIComponent(searchTerm)}`);
  };
  
  return (
    <div>
      <h1>Homepage</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter song title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default HomePage;
