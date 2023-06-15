import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SearchResultPage from './Pages/SearchResultPage';
import ChosenSongPage from './Pages/ChosenSongPage';
import "./App.css";


function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (searchTerm) => {
    navigate(`/search/${encodeURIComponent(searchTerm)}`);
  };

  const handleBackToHomepage = () => {
    navigate('/');
  };
  
  

  const handleViewLyrics = (trackId) => {
    navigate(`/song/${trackId}?query=${location.pathname}`);
  };

  const handleBackToSearchResults = () => {
    const searchQuery = new URLSearchParams(location.search).get('query');
    navigate(searchQuery || '/');
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              handleSearch={handleSearch}
            />
          }
        />
        <Route
          path="/search/:query"
          element={
            <SearchResultPage
               handleBackToHomepage={handleBackToHomepage}// Update the prop name here
              handleViewLyrics={handleViewLyrics}
            />
          }
        />
        <Route
          path="/song/:id"
          element={
            <ChosenSongPage
              handleBackToHomepage={handleBackToHomepage}
              handleBackToSearchResults={handleBackToSearchResults}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;



