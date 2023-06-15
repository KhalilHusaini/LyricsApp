import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { apiKey } from '../components/apiKeys';
import './ChosenSongPage.css';

const ChosenSongPage = () => {
  const { id } = useParams();
  const [lyrics, setLyrics] = useState('');
  const [trackDetails, setTrackDetails] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchLyrics = async () => {
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
      } catch (error) {
        console.log('Error:', error);
      }
    };

    const fetchTrackDetails = async () => {
      try {
        const trackResponse = await fetch(
          `http://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${apiKey}`
        );
        const trackData = await trackResponse.json();

        if (trackResponse.ok) {
          setTrackDetails(trackData.message.body.track);
        } else {
          console.log('Error:', trackData.message.body);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchLyrics();
    fetchTrackDetails();
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
      <h1>View Lyrics</h1>
      <div className="lyrics-box">
        <h2>Lyrics</h2>
        <div>{lyrics}</div>
      </div>
      <div className="track-details-box">
        <h2>Track Details</h2>
        {trackDetails ? (
          <div>
            <p>Track Name: {trackDetails.track_name}</p>
            <p>Artist Name: {trackDetails.artist_name}</p>
            <p>Album Name: {trackDetails.album_name}</p>
            <p>Track Rating: {trackDetails.track_rating}</p>
            <p>Track Length: {trackDetails.track_length}</p>
          </div>
        ) : (
          <p>Loading track details...</p>
        )}
      </div>
      <div className="button-container">
        <button onClick={handleBackToSearchResults}>Back to Search Results</button>
        <button onClick={handleBackToHomepage}>Back to Homepage</button>
      </div>
    </div>
  );
};

export default ChosenSongPage;
