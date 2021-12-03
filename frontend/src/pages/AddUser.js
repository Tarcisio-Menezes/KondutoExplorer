/* eslint-disable no-alert */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import MainContext from '../context/MainContext';
import '../css/addUser.css';

require('dotenv').config();

const host = process.env.HOST || 'localhost';

function AddUser() {
  const {
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    userPass,
    setUserPass,
    setToken
  } = useContext(MainContext);

  const createUser = (userName, userEmail, pass) => {
    const body = {
      name: userName,
      email: userEmail,
      password: pass,
    };

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    axios.post(`http://${host}:3003/user`, body, { headers })
      .then((response) => {
        if (response.data.token) {
          setToken(response.data.token);
          return alert(`O usuário ${userEmail} foi cadastrado com sucesso!`);
        }
      })
      .catch((errorOrResponse) => alert(
        `O usuário ${userEmail} já está cadastrado. ${errorOrResponse}`,
      ));
  };

  return (
    <div>
      <section className="createTitle">
        <h1>Konduters Explorer</h1>
        <h4>Cadastrar nova pessoa exploradora</h4>
      </section>
      <section className="createData">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Seu nome deve ter ao menos oito caracteres."
          onChange={ ({ target }) => setUserName(target.value) }
        />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o seu melhor email."
            onChange={ ({ target }) => setUserEmail(target.value) }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Sua senha deve ter seis caracteres."
            onChange={ ({ target }) => setUserPass(target.value) }
          />
        </Form.Group>
        <Link to="/home">
          <button
            variant="light"
            type="submit"
            onClick={ () => createUser(userName, userEmail, userPass) }
            disabled={ !userEmail || !userPass }
          >
            Entrar
          </button>
        </Link>
      </section>
    </div>
  );
}

export default AddUser;
