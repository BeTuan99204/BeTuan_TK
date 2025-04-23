import React from "react";

const GenreFilter = ({ genres, selectedGenre, onSelectGenre }) => {
  return (
    <div className="genre-filter">
      <label>Lọc theo thể loại:</label>
      <select value={selectedGenre} onChange={(e) => onSelectGenre(e.target.value)}>
        <option value="">Tất cả</option>
        {genres.map((genre, idx) => (
          <option key={idx} value={genre}>{genre}</option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;