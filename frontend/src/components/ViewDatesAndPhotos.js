import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import MainContext from '../context/MainContext';

function ViewDatesAndPhotos() {
  const { setDay, setPage, dataRover } = useContext(MainContext);

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
  } return null;
}

export default ViewDatesAndPhotos;
