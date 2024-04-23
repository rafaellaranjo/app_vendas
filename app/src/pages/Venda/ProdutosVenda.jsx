import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Message from '../../components/Message';
import { setprodutoVenda, removeProdutoVendas, listProdutosVenda, reset } from '../../slices/vendasSlice';
import { list as listProduto } from '../../slices/produtoSlice';
import { Link } from 'react-router-dom';

const ProdutosVenda = () => {
  const venda_id = useSelector(state => state.vendas.vendaId);

  const [produtoVenda, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const dispatch = useDispatch();
  const { produto } = useSelector((state) => state.produto);
  const { loading, error, produtos } = useSelector((state) => state.vendas);

  const handleSubmit = () => {
    const produtoVendaReq = {
        produto_id: produtoVenda,
        quantidade,
        venda_id
    };

    dispatch(setprodutoVenda(produtoVendaReq));
    dispatch(listProdutosVenda(venda_id));
  }

  const handleDelete = (produtoVenda) => {
    dispatch(removeProdutoVendas(produtoVenda.id));
    dispatch(listProdutosVenda(venda_id));
  };

  useEffect(() => {
    dispatch(listProdutosVenda(venda_id));
    dispatch(listProduto());
    dispatch(reset());
  }, [dispatch, venda_id]);

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
            <Form.Label className='form_label'>Tipo do Produto</Form.Label>
            <Form.Select aria-label="Default select example" onChange={(e) => setProduto(e.target.value)}>
              <option value="0">Selecione o produto</option>
              {produto && produto.map((tipo, index) => (
                <option key={index} value={tipo.id}>{tipo.nome}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className='form_label'>Quantidade</Form.Label>
            <Form.Control
              type="number"
              placeholder="Digite a Quantidade..."
              onChange={(e) => setQuantidade(e.target.value)}
              value={quantidade}/>
          </Form.Group>
          <Link to={'/vendas'}>
						<Button className='button_list' variant="secondary">Voltar</Button>
					</Link>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
						Cadastrar
					</Button>
        </Form>
      </div>
      <div className='list'>
        <Container fluid>
            <Row className='list-item list-item-header'>
            <Col xs lg="3">Produto</Col>
            <Col xs lg="2">Quantidade</Col>
            <Col xs lg="2">Valor Total</Col>
            <Col xs lg="2">Imposto</Col>
            <Col xs lg="3">Ações</Col>
          </Row>
          {produtos && produtos.map((item, index) => (
            <Row key={index} className='list-item'>
              <Col xs lg="3">{item.produto}</Col>
              <Col xs lg="2">{item.quantidade}</Col>
              <Col xs lg="2">{item.valor.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL',})}</Col>
              <Col xs lg="2">{item.imposto.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL',})}</Col>
              <Col xs lg="3">
                <Button className='button_list' variant="danger" onClick={() => handleDelete(item)}>Excluir</Button>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </>
  )
}

export default ProdutosVenda;