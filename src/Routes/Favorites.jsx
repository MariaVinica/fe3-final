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
    <div>
      <h1>Dentistas Favoritos</h1>
      {favoriteDentists.map((dentist) => (
        <Card key={dentist.id} dentist={dentist} />
      ))}
    </div>
  );
};

export default Favorites;
