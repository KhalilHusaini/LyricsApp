import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apiKey } from '../components/apiKeys';
import './ChosenSongPage.css';

export default function ChosenSongPage() {
  const { id } = useParams();
  const [lyrics, setLyrics] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLyrics = async () => {
      try {
        const response = await fetch(
          `http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${apiKey}`
        );
        const data = await response.json();

        if (response.ok) {
          setLyrics(data.message.body.lyrics.lyrics_body);
        } else {
          console.log('Error:', data.message.body);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchLyrics();
  }, [id]);

  const handleBackToSearchResults = () => {
    navigate('/search');
  };

  const handleBackToHomepage = () => {
    navigate('/');
  };

  return (
    <div className="chosen-song-container">
      <div className="lyrics-container">
        <button className="back-button" onClick={handleBackToSearchResults}>
          Back to Search Results
        </button>
        <button className="back-button" onClick={handleBackToHomepage}>
          Back to Homepage
        </button>
        <h1>Chosen Song Page</h1>
        <div>{lyrics}</div>
      </div>
    </div>
  );
}

