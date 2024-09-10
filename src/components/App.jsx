import React, { useEffect, useState } from 'react';
import Header from './Header';
import AnimeCard from './AnimeCard';
import Pagination from './Buscador';
import AdditionalPagination from './AdditionalPagination';
import EpisodesList from './EpisodesList';
import { usePagination } from '../hooks/useBuscador';
import { fetchAnimes } from '../services/animeService';
import { fetchAnimeEpisodes } from '../services/animeEpisodesService';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { currentPage, itemsPerPage, handlePageChange, handleSearch, searchTerm } = usePagination();
  const [animes, setAnimes] = useState([]);
  const [hoveredAnimeId, setHoveredAnimeId] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const getAnimes = async () => {
      setLoading(true);
      try {
        const data = await fetchAnimes(currentPage, itemsPerPage, searchTerm);
        const sortedAnimes = data.data.sort((a, b) =>
          a.attributes.titles.en_jp.localeCompare(b.attributes.titles.en_jp)
        );
        setAnimes(sortedAnimes);
        setTotalPages(Math.ceil(data.meta.total / itemsPerPage));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    getAnimes();
  }, [currentPage, searchTerm]);

  useEffect(() => {
    const getEpisodes = async () => {
      if (selectedAnime) {
        try {
          const data = await fetchAnimeEpisodes(selectedAnime.id);
          setEpisodes(data.data);
        } catch (error) {
          console.error('Error fetching episodes:', error);
        }
      }
    };

    getEpisodes();
  }, [selectedAnime]);

  const handleMouseEnter = (id) => {
    setHoveredAnimeId(id);
  };

  const handleMouseLeave = () => {
    setHoveredAnimeId(null);
  };

  const handleAnimeClick = (anime) => {
    setSelectedAnime(anime);
  };

  return (
    <div>
      <Header searchTerm={searchTerm} onSearchChange={handleSearch} />

      <div className="container my-4">
        <div className="row">
          <div className="col-md-8">
            <div className="row g-4">
              {animes.map((anime) => (
                <AnimeCard
                  key={anime.id}
                  anime={anime}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  hoveredAnimeId={hoveredAnimeId}
                  onAnimeClick={handleAnimeClick}
                />
              ))}
            </div>

            {loading && (
              <div className="text-center mt-4">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Cargando...</span>
                </div>
              </div>
            )}

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
            
            <AdditionalPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>

          <div className="col-md-4">
            {selectedAnime && (
              <div className="card border-light shadow-sm">
                <div className="card-body">
                  <h2 className="card-title">{selectedAnime.attributes.titles.en_jp}</h2>
                  <p className="card-text">{selectedAnime.attributes.synopsis}</p>
                  <div className="mt-3">
                    <h5>Episodios:</h5>
                    <EpisodesList episodes={episodes} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
