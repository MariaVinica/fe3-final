import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Components/Card';
import '../index.css';

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const [favoriteDentists, setFavoriteDentists] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setDentists(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de dentistas:', error);
      });
  }, []);

  const addToFavorites = (dentist) => {
    const isAlreadyFavorite = favoriteDentists.some((favDentist) => favDentist.id === dentist.id);

    if (!isAlreadyFavorite) {
      setFavoriteDentists((prevFavorites) => [...prevFavorites, dentist]);
      localStorage.setItem('favoriteDentists', JSON.stringify([...favoriteDentists, dentist]));
    }
  };

  return (
    <div className="dentists-container">
      <h1>Find a Dentist</h1>
      <div className="card-grid">
        {dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} addToFavorites={() => addToFavorites(dentist)} />
        ))}
      </div>
    </div>
  );
};

export default Home;
