import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "pght" dependiendo del theme del Context

const Detail = () => {
  const { dentistsStates, dentistsDispatch } = useGlobalContext();

  const params = useParams();

  const urlDetail = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(urlDetail).then((res) =>
      dentistsDispatch({ type: 'GET_DENTIST', payload: res.data })
    );
  }, []);

  return (
    <>
      <h1 class="detail-title">Detail Dentist id</h1>
      <section class="dentist-detail">
        <article class="dentist-photo">
          <img
            src="/images/doctor.jpg"
            alt="dentist_photo"
            class="dentist-image"
          />
        </article>
        <article class="dentist-info">
          <p>{dentistsStates.dentist.name}</p>
          <p>{dentistsStates.dentist.email}</p>
          <p>{dentistsStates.dentist.phone}</p>
          <p>{dentistsStates.dentist.website}</p>
        </article>
      </section>
    </>
  );
};

export default Detail;
