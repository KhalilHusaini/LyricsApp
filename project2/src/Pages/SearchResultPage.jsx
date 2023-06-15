import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiKey } from '../components/apiKeys';
import './SearchResultPage.css';

const SearchResultPage = ({ handleBackToHomepage, handleViewLyrics }) => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://api.musixmatch.com/ws/1.1/track.search?q_track=${query}&page_size=20&page=1&s_track_rating=desc&apikey=${apiKey}`
        );
        const data = await response.json();

        if (response.ok) {
          setSearchResults(data.message.body.track_list.map(item => item.track));
        } else {
          console.log('Error:', data.message.body);
        }
      } catch (error) {
        console.log('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="search-results-container">
      <h1 className="search-results-title">Search Results</h1>
      <button className="back-button" onClick={handleBackToHomepage}>
        Back to Homepage
      </button>
      <div className="card-container">
        {isLoading ? (
          <p className="loading">Loading search results...</p>
        ) : searchResults && searchResults.length > 0 ? (
          searchResults.map((result) => (
            <div className="card" key={result.track_id}>
              <h2 className="track-name">{result.track_name}</h2>
              <p className="artist-name">{result.artist_name}</p>
              <button
                className="view-lyrics-button"
                onClick={() => handleViewLyrics(result.track_id)}
              >
                View Lyrics
              </button>
            </div>
          ))
        ) : (
          <p className="no-result">No search results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultPage;

