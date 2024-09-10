import React from 'react';

const EpisodesList = ({ episodes }) => (
  <div>
    {episodes.length > 0 ? (
      <ul className="list-group">
        {episodes.map((episode) => (
          <li key={episode.id} className="list-group-item">
            <strong>{episode.attributes.canonicalTitle}</strong>
            <p className="mb-0">Episodio {episode.attributes.episodeNumber}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No episodes available.</p>
    )}
  </div>
);

export default EpisodesList;
