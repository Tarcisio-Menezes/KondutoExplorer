import React, { useContext } from 'react';
import MainContext from '../context/MainContext';

function SelectRover() {
  const { setRover } = useContext(MainContext);
  return (
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
}

export default SelectRover;
