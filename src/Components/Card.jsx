import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ dentist, addToFavorites }) => {
  const handleAddToFavorites = () => {
    addToFavorites(dentist);
  };

  return (
    <div className="card">
      <h2>{dentist.name}</h2>
      <p>{dentist.username}</p>
      <button onClick={handleAddToFavorites}>ADD FAV</button>
      <Link to={`/dentist/${dentist.id}`}>Ver detalle</Link>
    </div>
  );
};

export default Card;
