import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiKey } from '../components/apiKeys';

export default function ChosenSongPage() {
  const { id } = useParams();
  const [lyrics, setLyrics] = useState('');

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

  return (
    <div>
      <h1>Chosen Song</h1>
      <h2>Lyrics</h2>
      {lyrics ? <pre>{lyrics}</pre> : <p>No lyrics found.</p>}
    </div>
  );
}
