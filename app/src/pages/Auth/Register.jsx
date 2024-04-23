import './Auth.css';
import { Button, Form, Container, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Message from '../../components/Message';
import { register, reset } from '../../slices/authSlice';
import { Link } from 'react-router-dom';

const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = () => {
    const user = {
      username,
      password,
      passwordConfirm
    };

    dispatch(register(user));
  }

  useEffect(() => {
    dispatch(reset())
  }, [dispatch]);

  return (
    <Modal show={true} fullscreen={false}>
      <Modal.Header>
        <Modal.Title>Cadastre-se</Modal.Title>
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
          <Form.Group className="mb-3" controlId="passwordConfirm">
            <Form.Label>Confirme a Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirme a Senha"
              autoFocus
              onChange={(e) => setPasswordConfirm(e.target.value)}
              value={passwordConfirm || ""}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Link to={'/login'}>
          <Button variant="secondary">Cancelar</Button>
        </Link>
        {!loading && <Button variant="primary" onClick={handleSubmit}>Cadastrar</Button>}
        {loading && <Button variant="primary" disabled>Aguarde...</Button>}
      </Modal.Footer>
      <Container>
        {error && <Message msg={error} type="danger"/>}
      </Container>
    </Modal>
  )
}

export default Register