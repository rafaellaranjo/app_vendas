import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

// hooks
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logout, reset } from '../slices/authSlice';

function NavbarHome() {

  const { auth } = useAuth();


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate('/login');
  }

  return (
    <Navbar bg="light" expand="lg" className='nav'>
      <Container fluid>
      <Navbar.Brand href="/">Vendas Legal</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll>
          {auth ? (
            <>
              <Nav.Link as={NavLink} to="/" exact="true">
                Página Inicial
              </Nav.Link>
              <Nav.Link as={NavLink} to="/tipo_produto">
                Tipo Produto
              </Nav.Link>
              <Nav.Link as={NavLink} to="/impostos">
                Impostos
              </Nav.Link>
              <Nav.Link as={NavLink} to="/produtos">
                Produtos
              </Nav.Link>
              <Nav.Link as={NavLink} to="/vendas">
                Vendas
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/register">
              Cadastre-se
              </Nav.Link>
            </>
          )}
        </Nav>
        {auth && <Button variant="outline-danger" onClick={handleLogout}>Sair</Button>}
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;