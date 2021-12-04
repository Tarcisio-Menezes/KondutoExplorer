/* eslint-disable react/void-dom-elements-no-children */
import React, { useState, useEffect, useContext } from 'react';
import { Form } from 'react-bootstrap';
import MainContext from '../context/MainContext';
// import axios from 'axios';
// import MainContext from '../context/MainContext';
import { getDatesAndPhotos } from '../utils/requestAPI';
import SelectRover from '../components/SelectRover';
import InfosSelectedRover from '../components/InfosSelectedRover';

function Home() {
  // const { userName, token, setFavorites } = useContext(MainContext);
  const { rover, dataRover, setDataRover } = useContext(MainContext);
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
      <SelectRover />
      <InfosSelectedRover />
      { viewDatesAndPhotos() }
    </div>
  );
}

export default Home;
