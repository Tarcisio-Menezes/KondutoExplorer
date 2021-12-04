/* eslint-disable react/void-dom-elements-no-children */
import React, { useEffect, useContext } from 'react';
import MainContext from '../context/MainContext';
// import axios from 'axios';
// import MainContext from '../context/MainContext';
import { getDatesAndPhotos } from '../utils/requestAPI';
import SelectRover from '../components/SelectRover';
import InfosSelectedRover from '../components/InfosSelectedRover';
import ViewDatesAndPhotos from '../components/ViewDatesAndPhotos';

function Home() {
  const { rover, day, page, setDataRover } = useContext(MainContext);

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
        return setDataRover(data);
      }
    }
    getAllDataInSelectedDay();
  }, [day, page, rover, setDataRover]);

  return (
    <div>
      Hello home
      <SelectRover />
      <InfosSelectedRover />
      <ViewDatesAndPhotos />
    </div>
  );
}

export default Home;
