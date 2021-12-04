/* eslint-disable react/void-dom-elements-no-children */
import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
// import axios from 'axios';
// import MainContext from '../context/MainContext';
import { getDatesAndPhotos } from '../utils/requestAPI';

function Home() {
  // const { userName, token, setFavorites } = useContext(MainContext);
  const [rover, setRover] = useState('');
  const [dataRover, setDataRover] = useState('');
  const [day, setDay] = useState(1);
  const [page, setPage] = useState(1);

  // const headers = {
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   authorization: token,
  // };

  useEffect(() => {
    async function getAllDataInSelectedDay() {
      if (rover) {
        const data = await getDatesAndPhotos(rover, day, page);
        console.log(data);
        console.log(rover);
        return setDataRover(data);
      }
    }
    getAllDataInSelectedDay();
  }, [day, page, rover]);

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
    if (dataRover) {
      const { photos } = dataRover;
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

  const viewDatesAndPhotos = () => {
    if (dataRover) {
      return (
        <div>
          <h3>Konduter, agora vamos explorar ainda mais</h3>
          <p>
            Utilize os campos abaixo para fazer uma pesquisa combinada.
            Digite um número inteiro que representará o dia em marte em
            que deseja ver algumas imagens, contando a partir da data
            em que o rover chegou. Dica: 1 representa o
            primeiro dia do rover no planeta, 2 representa o segundo e assim por diante.
          </p>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Dia marciano</Form.Label>
            <Form.Control
              type="number"
              placeholder="Digite o dia."
              onChange={ ({ target }) => setDay(target.value) }
            />
            <Form.Label>Navegue pelas páginas</Form.Label>
            <Form.Control
              type="number"
              min="0"
              step="1"
              placeholder="Página."
              onChange={ ({ target }) => setPage(target.value) }
            />
          </Form.Group>
        </div>
      );
    }
  };

  return (
    <div>
      Hello home
      { selectRover() }
      { infosSelectedRover() }
      { viewDatesAndPhotos() }
    </div>
  );
}

export default Home;
