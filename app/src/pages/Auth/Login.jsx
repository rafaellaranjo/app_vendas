import './Auth.css';
import { Button, Form, Container, Modal } from 'react-bootstrap';
import Message from '../../components/Message';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../../slices/authSlice';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    const user = {
      username,
      password,
    };

    dispatch(login(user));

    e.preventDefault();
  }

  useEffect(() => {
    dispatch(reset())
  }, [dispatch]);

  return (
    <Modal show={true} fullscreen={false}>
      <Modal.Header>
        <Modal.Title>Faça seu login!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Nome de usuário</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome de usuário"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
              value={username || ""}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Senha"
              autoFocus
              onChange={(e) => setPassword(e.target.value)}
              value={password || ""}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Link to={'/'}>
          <Button variant="secondary">Cancelar</Button>
        </Link>
        {!loading && <Button variant="primary" onClick={handleSubmit}>Entrar</Button>}
        {loading && <Button variant="primary" disabled>Aguarde...</Button>}
      </Modal.Footer>
      <Container>
        {error && <Message msg={error} type="danger"/>}
      </Container>
    </Modal>
  )
}

export default Login