import './Impostos.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import Message from '../../components/Message';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listImpostos, createImpostos, removeImpostos, reset } from '../../slices/impostosSlice';
import { listTipoProduto } from '../../slices/tipoProdutoSlice';

const Impostos = () => {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [tipo_produto_id, setTipoProduto] = useState("");

  const dispatch = useDispatch();
  const { loading, error, impostos } = useSelector((state) => state.impostos);
  const { tipoProduto } = useSelector((state) => state.tipoProduto);
    
  const handleDelete = (venda) => {
    dispatch(removeImpostos(venda.id));
  };

  const handleSubmit = (e) => {
    const imposto = {
      nome,
      valor,
      tipo_produto_id
    };

    dispatch(createImpostos(imposto));
    dispatch(listImpostos());
    e.preventDefault();
  }
  
  useEffect(() => {
    dispatch(listTipoProduto());
    dispatch(listImpostos());
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
        <div id='impostos'>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className='form_label'>Nome do Imposto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o nome..."
                  autoFocus
                  onChange={(e) => setNome(e.target.value)}
                  value={nome}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPercentual">
                <Form.Label className='form_label'>Percentual</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o percentual..."
                  onChange={(e) => setValor(e.target.value)}
                  value={valor}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicTipo">
                <Form.Label className='form_label'>Tipo do Produto</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => setTipoProduto(e.target.value)}>
                  <option value="0">Selecione o Tipo de produto</option>
                  {tipoProduto.map((tipo, index) => (
                    <option key={index} value={tipo.id}>{tipo.nome}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Cadastrar
              </Button>
            </Form>
        </div>
        <div className='list'>
        <Container fluid>
          <Row className='list-item list-item-header'>
            <Col xs lg="3">Nome</Col>
            <Col xs lg="3">Valor</Col>
            <Col xs lg="3">Tipo</Col>
            <Col xs lg="3">Ações</Col>
          </Row>
          {impostos.map((item, index) => (
            <Row key={index} className='list-item'>
              <Col xs lg="3">{item.nome}</Col>
              <Col xs lg="3">{item.valor}</Col>
              <Col xs lg="3">{item.tipo_produto}</Col>
              <Col xs lg="3">
                <Button className='button_list' variant="danger" onClick={() => handleDelete(item)}>Excluir</Button>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </>
  );
};

export default Impostos;
