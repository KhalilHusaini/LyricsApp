import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apiKey } from '../components/apiKeys';
import './ChosenSongPage.css';

export default function ChosenSongPage() {
  const { id } = useParams();
  const [lyrics, setLyrics] = useState('');
  const [songDetails, setSongDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSongDetailsAndLyrics = async () => {
      try {
        const lyricsResponse = await fetch(
          `http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${apiKey}`
        );
        const lyricsData = await lyricsResponse.json();

        if (lyricsResponse.ok) {
          setLyrics(lyricsData.message.body.lyrics.lyrics_body);
        } else {
          console.log('Error:', lyricsData.message.body);
        }

        const detailsResponse = await fetch(
          `http://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${apiKey}`
        );
        const detailsData = await detailsResponse.json();

        if (detailsResponse.ok) {
          setSongDetails(detailsData.message.body.track);
        } else {
          console.log('Error:', detailsData.message.body);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchSongDetailsAndLyrics();
  }, [id]);

  const handleBackToSearchResults = () => {
    const searchQuery = new URLSearchParams(location.search).get('query');
    navigate(searchQuery || '/');
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
        {lyrics ? (
          <div>
            <div>{lyrics}</div>
            {songDetails && (
              <div className="song-details">
                <h2>{songDetails.track_name}</h2>
                <h3>{songDetails.artist_name}</h3>
                <p>{songDetails.album_name}</p>
                <p>{songDetails.track_rating}</p>
                <p>{songDetails.track_length}</p>
              </div>
            )}
          </div>
        ) : (
          <p>Loading lyrics...</p>
        )}
      </div>
    </div>
  );
}

