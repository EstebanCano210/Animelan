import React from 'react';

const Header = ({ searchTerm, onSearchChange }) => {
  return (
    <header className="bg-dark text-white py-3 mb-4">
      <div className="container">
        <h1 className="text-center">AnimeLan</h1>
        <div className="input-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar Anime"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
