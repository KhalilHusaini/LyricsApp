import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SearchResultPage from './Pages/SearchResultPage';
import ChosenSongPage from './Pages/ChosenSongPage';
import "./App.css";


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search/:query" element={<SearchResultPage/>} />
          <Route path="/song/:id" element={<ChosenSongPage />} />
      </Routes>
    </>
  );
}

export default App;

