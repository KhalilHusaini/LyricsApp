import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ChosenSongPage() {
  const { id } = useParams();
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    const fetchLyrics = async () => {
      try {
        // Make API request to fetch the lyrics based on the song ID
        const response = await fetch(`YOUR_API_ENDPOINT/song/${id}/lyrics`);
        const data = await response.json();

        if (response.ok) {
          setLyrics(data.lyrics);
        } else {
          console.log('Error:', data.message);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchLyrics();
  }, [id]);

  return (
    <div>
      <h1>Chosen Song Page</h1>
      <h2>Lyrics</h2>
      {lyrics ? <pre>{lyrics}</pre> : <p>No lyrics available for this song.</p>}
    </div>
  );
}
