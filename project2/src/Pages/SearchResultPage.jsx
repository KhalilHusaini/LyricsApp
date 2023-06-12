import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apiKey } from '../components/apiKeys';

export default function SearchResultPage() {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://api.musixmatch.com/ws/1.1/track.search?q_track=${query}&page_size=10&page=1&s_track_rating=desc&apikey=${apiKey}`
        );
        const data = await response.json();

        if (response.ok) {
          setSearchResults(data.message.body.track_list.map(item => item.track));
        } else {
          console.log('Error:', data.message.body);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, [query]);

  const handleViewLyrics = (trackId) => {
    navigate(`/song/${trackId}`);
  };

  return (
    <div>
      <h1>Search Results</h1>
      {searchResults && searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.track_id}>
              {result.track_name}{' '}
              <button onClick={() => handleViewLyrics(result.track_id)}>
                View Lyrics
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No search results found.</p>
      )}
    </div>
  );
}

