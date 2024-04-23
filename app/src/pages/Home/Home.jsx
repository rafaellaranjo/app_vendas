import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6}>
          <h1 className="text-center mb-4">Bem-vindo ao Sistema Vendas Legal</h1>
          <p className="lead text-center">Este é um sistema de vendas incrível, onde você pode gerenciar suas vendas de forma fácil e eficiente.</p>
          <p className="text-center">Comece a explorar as funcionalidades do sistema e aproveite ao máximo!</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Home