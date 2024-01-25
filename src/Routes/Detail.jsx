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
        console.error('Error getting details from dentist:', error);
      });
  }, [id]);

  const renderDetailTable = () => {
    if (!dentistDetail) {
      return <p>Loading information from the Dentist...</p>;
    }

    return (
        <table>
          <tbody>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Sitio web</th>
            </tr>
            <tr>
              <td>{dentistDetail.name}</td>
              <td>{dentistDetail.email}</td>
              <td>{dentistDetail.phone}</td>
              <td>{dentistDetail.website}</td>
            </tr>
          </tbody>
        </table>
    );
  };

  return (
    <div>
      <h1>Dentist Information</h1>
      {renderDetailTable()}
    </div>
  );
};

export default Detail;

