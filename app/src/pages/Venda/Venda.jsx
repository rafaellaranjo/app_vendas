/* eslint-disable no-unused-vars */
import './Venda.css';
import { Button, Form, Container, Row, Col, ListGroup  } from 'react-bootstrap';
import Message from '../../components/Message';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listVendas, createVendas, removeVendas, reset, setVendaId } from '../../slices/vendasSlice';
import { Link } from 'react-router-dom';

const Vendas = () => {
		const [cliente, setCliente] = useState("");
		const [status, setStatus] = useState("");

		const dispatch = useDispatch();
		const { loading, error, vendas } = useSelector((state) => state.vendas);

		const handleDelete = (venda) => {
			dispatch(removeVendas(venda.id));
			dispatch(listVendas());
		};

		const handleSubmit = (e) => {
			const venda = {
				cliente,
				status
			};
	
			dispatch(createVendas(venda));
			dispatch(listVendas());
			e.preventDefault();
		}

		useEffect(() => {
			dispatch(listVendas());
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
						<Form.Label>Nome do Cliente</Form.Label>
						<Form.Control
								type="text"
								placeholder="Digite o nome..."
								autoFocus
								onChange={(e) => setCliente(e.target.value)}
								value={cliente || ""}/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicStatus">
						<Form.Label>Status</Form.Label>
						<Form.Select aria-label="Status" onChange={(e) => setStatus(e.target.value)}>
							<option>Status</option>
							<option value={status || "Pendente"}>Pendente</option>
							<option value={status || "Aguardando Pagamento"}>Aguardando Pagamento</option>
							<option value={status || "Concluido"}>Concluido</option>
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
						<Col xs lg="2">Cliente</Col>
						<Col xs lg="1">Status</Col>
						<Col xs lg="2">Produtos</Col>
						<Col xs lg="2">Valor da Venda</Col>
						<Col xs lg="2">Valor Impostos</Col>
						<Col xs lg="3">Ações</Col>
					</Row>
						{Array.isArray(vendas) && vendas.map((venda, index) => (
							<Row key={index} className='list-item'>
								<Col xs lg="2">{venda.cliente}</Col>
								<Col xs lg="1">{venda.status}</Col>
								<Col xs lg="2">
									<ListGroup>
										{venda.produtos.map((produto, index) => (
											<ListGroup.Item key={index}>{produto}</ListGroup.Item>
										))}
									</ListGroup>
								</Col>
								<Col xs lg="2">{venda.valor.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL',})}</Col>
								<Col xs lg="2">{venda.imposto.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL',})}</Col>
								<Col xs lg="3">
									<Link to={'/produto_vendas'}>
										<Button className='button_list' variant="secondary" onClick={() => dispatch(setVendaId(venda.id))}>Produtos</Button>
									</Link>
									<Button className='button_list' variant="danger" onClick={() => handleDelete(venda)}>Excluir</Button>
								</Col>
							</Row>
						))}
				</Container>
			</div>
		</>
	);
};

export default Vendas;