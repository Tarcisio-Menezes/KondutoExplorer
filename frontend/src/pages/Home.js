/* eslint-disable react/void-dom-elements-no-children */
import React, { useEffect, useContext, useState } from 'react';
import MainContext from '../context/MainContext';
import { getDatesAndPhotos } from '../utils/requestAPI';
import SelectRover from '../components/SelectRover';
import InfosSelectedRover from '../components/InfosSelectedRover';
import ViewDatesAndPhotos from '../components/ViewDatesAndPhotos';
import Nav from '../components/Nav';

function Home() {
  const { rover, day, page, setDataRover } = useContext(MainContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllDataInSelectedDay() {
      if (rover) {
        const data = await getDatesAndPhotos(rover, day, page);
        setDataRover(data);
        return setLoading(false);
      }
    }
    getAllDataInSelectedDay();
  }, [day, page, rover, setDataRover]);

  return (
    <div>
      <Nav />
      <SelectRover />
      { loading && rover ? <h5>Carregando...</h5> : <InfosSelectedRover />}
      <ViewDatesAndPhotos />
    </div>
  );
}

export default Home;
