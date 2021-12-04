/* eslint-disable react/void-dom-elements-no-children */
import React, { useState, useEffect } from 'react';
// import { Card } from 'react-bootstrap';
// import axios from 'axios';
// import MainContext from '../context/MainContext';
import { getAllDayOneRover } from '../utils/requestAPI';

function Home() {
  // const { userName, token, setFavorites } = useContext(MainContext);
  const [rover, setRover] = useState('');
  const [dataRover, setDataRover] = useState('');

  // const headers = {
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   authorization: token,
  // };

  useEffect(() => {
    async function getAllRoversInDayOne() {
      if (rover) {
        const data = await getAllDayOneRover(rover);
        return setDataRover(data);
      }
    }
    getAllRoversInDayOne();
  }, [rover]);

  const selectRover = () => (
    <section>
      <p>Selecione o um rover para explorar:</p>
      <div>
        <label htmlFor="curiosity">
          <input
            type="radio"
            id="curiosity"
            name="rover"
            value="curiosity"
            onChange={ ({ target }) => setRover(target.value) }
          />
          Curiosity
        </label>
      </div>
      <div>
        <label htmlFor="opportunity">
          <input
            type="radio"
            id="opportunity"
            name="rover"
            value="opportunity"
            onChange={ ({ target }) => setRover(target.value) }
          />
          Opportunity
        </label>
      </div>
      <div>
        <label htmlFor="spirit">
          <input
            type="radio"
            id="spirit"
            name="rover"
            value="spirit"
            onChange={ ({ target }) => setRover(target.value) }
          />
          Spirit
        </label>
      </div>
    </section>
  );

  const infosSelectedRover = () => {
    const { photos } = dataRover;
    if (dataRover) {
      const imagesIndDayOne = photos.length;
      const maxPage = 25;
      return (
        <section>
          <p>
            {`O rover ${rover} chegou em Marte por volta de ${photos[0].earth_date}.`}
          </p>
          <p>{`Seu status de atividade é ${photos[0].rover.status}!`}</p>
          <p>
            {`Ele capturou ${
              imagesIndDayOne < maxPage ? '' : 'mais de'} ${imagesIndDayOne}
            imagens em seu primeiro dia no planeta vermelho!!`}
          </p>
        </section>
      );
    } return null;
  };

  return (
    <div>
      Hello home
      { selectRover() }
      { infosSelectedRover() }
    </div>
  );
}

export default Home;
