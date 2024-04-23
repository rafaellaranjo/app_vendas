import './Products.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import Message from '../../components/Message';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { list as listProduto, remove, create, reset } from '../../slices/produtoSlice';
import { listTipoProduto } from '../../slices/tipoProdutoSlice';

const Products = () => {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");
	const [tipo_produto_id, setTipoProduto] = useState("");

  const dispatch = useDispatch();
  const { loading, error, produto } = useSelector((state) => state.produto);
  const { tipoProduto } = useSelector((state) => state.tipoProduto);
  
  const handleDelete = (item) => {
    dispatch(remove(item.id));
    dispatch(listProduto());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const produto = {
      nome,
      quantidade,
      valor,
			tipo_produto_id
    };

    dispatch(create(produto));
		dispatch(listProduto());
  }

  useEffect(() => {
		dispatch(listTipoProduto());
    dispatch(listProduto());
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
      <div id='product'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className='form_label'>Nome do Produto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o nome..."
              autoFocus
              onChange={(e) => setNome(e.target.value)}
              value={nome}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className='form_label'>Quantidade</Form.Label>
            <Form.Control
              type="number"
              placeholder="Digite a Quantidade..."
              onChange={(e) => setQuantidade(e.target.value)}
              value={quantidade}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className='form_label'>Valor</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o valor..."
              onChange={(e) => setValor(e.target.value)}
              value={valor}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
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
						<Col xs lg="2">Valor</Col>
						<Col xs lg="2">Quantidade</Col>
						<Col xs lg="2">Tipo</Col>
            <Col xs lg="3">Ações</Col>
          </Row>
          {produto.map((item, index) => (
            <Row key={index} className='list-item'>
              <Col xs lg="3">{item.nome}</Col>
							<Col xs lg="2">{item.valor}</Col>
							<Col xs lg="2">{item.quantidade}</Col>
							<Col xs lg="2">{item.tipo_produto}</Col>
              <Col xs lg="3">
                <Button className='button_list' variant="danger" onClick={() => handleDelete(item)}>Excluir</Button>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </>
  );
}

export default Products;
