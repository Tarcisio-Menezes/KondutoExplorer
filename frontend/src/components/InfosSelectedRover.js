import React, { useContext } from 'react';
import MainContext from '../context/MainContext';

function InfosSelectedRover() {
  const { dataRover, rover } = useContext(MainContext);
  if (dataRover) {
    const { photos } = dataRover;
    const imagesIndDayOne = photos.length;
    const maxPage = 25;
    return (
      <section className="preInfos">
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
}

export default InfosSelectedRover;
