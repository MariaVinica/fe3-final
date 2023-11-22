import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const { id } = useParams();
  const [dentistDetail, setDentistDetail] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setDentistDetail(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener detalles del dentista:', error);
      });
  }, [id]);

  return (
    <div>
      <h1>Detalles del Dentista</h1>
      {dentistDetail ? (
        <div>
          <p>Nombre: {dentistDetail.name}</p>
          <p>Email: {dentistDetail.email}</p>
          <p>Teléfono: {dentistDetail.phone}</p>
          <p>Sitio web: {dentistDetail.website}</p>
        </div>
      ) : (
        <p>Cargando detalles del dentista...</p>
      )}
    </div>
  );
};

export default Detail;