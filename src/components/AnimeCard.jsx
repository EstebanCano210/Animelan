import React from 'react';
import PropTypes from 'prop-types';

const AnimeCard = ({ anime, onMouseEnter, onMouseLeave, hoveredAnimeId, onAnimeClick }) => (
  <div className="col-md-4 col-lg-3">
    <div 
      className="card h-100 border-light shadow-sm position-relative" 
      style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}
    >
      <img
        src={anime.attributes.posterImage.small} 
        alt={anime.attributes.titles.en_jp} 
        className="card-img-top" 
        style={{ transition: 'opacity 0.3s' }} 
      />
      
      {/* Información debajo de la imagen */}
      <div className="card-body">
        <h5 className="card-title">{anime.attributes.titles.en_jp}</h5>
        <p className="card-text">{anime.attributes.canonicalTitle}</p>
        <p className="card-text text-muted">{anime.attributes.subtype}</p>
        {/* Botón para mostrar capítulos */}
        <button 
          className="btn btn-primary mt-2" 
          onClick={() => onAnimeClick(anime)}
        >
          Mostrar Episodios
        </button>
      </div>
    </div>
  </div>
);

AnimeCard.propTypes = {
  anime: PropTypes.shape({
    id: PropTypes.string.isRequired,
    attributes: PropTypes.shape({
      posterImage: PropTypes.shape({
        small: PropTypes.string.isRequired
      }).isRequired,
      titles: PropTypes.shape({
        en_jp: PropTypes.string.isRequired
      }).isRequired,
      canonicalTitle: PropTypes.string.isRequired,
      subtype: PropTypes.string.isRequired,
      synopsis: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  hoveredAnimeId: PropTypes.string,
  onAnimeClick: PropTypes.func.isRequired
};

export default AnimeCard;
