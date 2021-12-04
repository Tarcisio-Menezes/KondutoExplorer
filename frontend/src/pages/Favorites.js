import React, { useContext } from 'react';
import axios from 'axios';
// import { Form, Card, Button } from 'react-bootstrap';
import MainContext from '../context/MainContext';

require('dotenv').config();

const host = process.env.HOST || 'localhost';

function Favorites() {
  const { token } = useContext(MainContext);

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    authorization: token,
  };

  const gettAllFavorites = () => {
    axios.get(`http://${host}:3003/favorite`, body, { headers })
      .then((response) => {
        console.log(response.data);
      })
      .catch((errorOrResponse) => console.log(errorOrResponse));
  };

  useEffect(() => {
    async function getAllFavorites() {
      const data = await gettAllFavorites();
      return console.log(data);
    }
    getAllFavorites();
  }, []);

  return (
    <div>
      Olá favorites!
    </div>
  );
}

export default Favorites;
