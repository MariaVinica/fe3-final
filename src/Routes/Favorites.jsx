import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

const Favorites = () => {
  const [favoriteDentists, setFavoriteDentists] = useState([]);

  useEffect(() => {
    const localStorageData = localStorage.getItem('favoriteDentists');
    const parsedData = localStorageData ? JSON.parse(localStorageData) : [];
    setFavoriteDentists(parsedData);
  }, []);

  return (
    <div className="dentist-container">
      <h1>Favorite Dentist</h1>
      <div className="card-grid" > 
      {favoriteDentists.map((dentist) => (
        < Card key={dentist.id} dentist={dentist} />
      ))}
      </div>
    </div>
  );
};

export default Favorites;
