import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiKey } from '../components/apiKeys';

export default function SearchResultPage() {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://api.musixmatch.com/ws/1.1/track.search?q_track=${query}&page_size=10&page=1&s_track_rating=desc&apikey=${apiKey}`
        );
        const data = await response.json();

        console.log(response);

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

  return (
    <div>
      <h1>Search Results</h1>
      {searchResults && searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.track_id}>{result.track_name}</li>
          ))}
        </ul>
      ) : (
        <p>No search results found.</p>
      )}
    </div>
  );
}

