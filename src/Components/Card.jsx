import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ dentist, addToFavorites }) => {
  const handleAddToFavorites = () => {
    addToFavorites(dentist);
    alert('Adding the dentist to favorites')
  };


  return (
    <div className="card">
      <img src="./images/doctor.jpg" alt="Doctor" className="doctor-image"/>
      <h2>
        <Link to={`/dentist/${dentist.id}`}>{dentist.name}</Link>
      </h2>
      <p className="profile">{dentist.username}</p>
      <div className="card-bottom">
        <button onClick={handleAddToFavorites}>
          <img src="./images/ico-star.png" alt="Star Icon" width="20" height="20"/>
        </button>
        <Link to={`/dentist/${dentist.id}`}></Link>
      </div>
    </div>
  );
};

export default Card;




