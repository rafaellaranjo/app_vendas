import './TipoProduto.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import Message from '../../components/Message';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listTipoProduto, create, remove, reset } from '../../slices/tipoProdutoSlice';

const TipoProduto = () => {
    const [nome, setNome] = useState("");

    const dispatch = useDispatch();
    const { loading, error, tipoProduto } = useSelector((state) => state.tipoProduto);

    const handleDelete = (item) => {
      dispatch(remove(item.id));
      dispatch(listTipoProduto());
    };

    const handleSubmit = (e) => {
      const tipoProduto = {
        nome,
      };
  
      dispatch(create(tipoProduto));
      dispatch(listTipoProduto());
      e.preventDefault();
    }
    
    useEffect(() => {
      dispatch(listTipoProduto());
      dispatch(reset());
    }, [dispatch]);

    if (loading) {
      return <p>Carregando...</p>;
    }

    return (
        <>
          <Container>
            {error && <Message msg={error} type="danger"/>}
          </Container>
            <div id='tipo_product'>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nome do Tipo Produto</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite o nome..."
                        autoFocus
                        onChange={(e) => setNome(e.target.value)}
                        value={nome || ""}/>
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Cadastrar
                  </Button>
                </Form>
            </div>
            <div className='list'>
                <Container fluid>
                  <Row className='list-item list-item-header'>
                    <Col xs lg="9">Nome</Col>
                    <Col xs lg="3">Ações</Col>
                  </Row>
                    {Array.isArray(tipoProduto) && tipoProduto.map((tipoProduto, index) => (
                      <Row key={index} className='list-item'>
                        <Col xs lg="9">{tipoProduto.nome}</Col>
                        <Col xs lg="3">
                          <Button className='button_list' variant="danger" onClick={() => handleDelete(tipoProduto)}>Excluir</Button>
                        </Col>
                      </Row>
                    ))}
                </Container>
            </div>
        </>
      );
    };

export default TipoProduto;