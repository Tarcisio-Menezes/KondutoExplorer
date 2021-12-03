/* eslint-disable no-alert */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import MainContext from '../context/MainContext';
import '../css/login.css';

require('dotenv').config();

const host = process.env.HOST || 'localhost';

function Login() {
  const {
    userEmail,
    setUserEmail,
    userPass,
    setUserPass,
    setToken,
  } = useContext(MainContext);

  const userLogin = (userEmail, pass) => {
    const body = {
      email: userEmail,
      password: pass,
    };

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    axios.post(`http://${host}:3003/login`, body, { headers })
      .then((response) => {
        if (response.data.token) {
          return setToken(response.data.token);
        }
      })
      .catch((errorOrResponse) => alert(
        `Houve um problema ao autenticar o usuário ${userEmail}. ${errorOrResponse}`,
      ));
  };

  return (
    <div>
      <section className="titlesLogin">
        <h1>Konduters Explorer</h1>
        <h4>Login de pessoa colaboradora</h4>
      </section>
      <section className="dataLogin">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o seu e-mail."
            onChange={ ({ target }) => setUserEmail(target.value) }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha."
            onChange={ ({ target }) => setUserPass(target.value) }
          />
        </Form.Group>
        <Link to="/home">
          <button
            type="submit"
            onClick={ () => userLogin(userEmail, userPass) }
            disabled={ !userEmail || !userPass }
          >
            Entrar
          </button>
        </Link>
      </section>
      <br />
      <br />
      <div className="register">
        <p>Ainda não tem cadastro?</p>
        <Link to="/create-user">
          Crie seu usuário aqui
        </Link>
      </div>
    </div>
  );
}

export default Login;
