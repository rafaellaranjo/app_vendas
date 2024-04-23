import './App.css';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

// components
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';

// pages
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';
import Home from './pages/Home/Home';

// router
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// hooks
import { useAuth } from './hooks/useAuth.js';
import Products from './pages/Products/Products.jsx';
import TipoProduto from './pages/TipoProdtudo/TipoProduto.jsx';
import Impostos from './pages/Impostos/Impostos.jsx';
import Vendas from './pages/Venda/Venda.jsx';
import ProdutosVenda from './pages/Venda/ProdutosVenda.jsx';

function App() {
  const { auth, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tipo_produto" element={auth ? <TipoProduto /> : <Navigate to="/" />} />
            <Route path="/impostos" element={auth ? <Impostos /> : <Navigate to="/" />} />
            <Route path="/produtos" element={auth ? <Products /> : <Navigate to="/" />} />
            <Route path="/vendas" element={auth ? <Vendas /> : <Navigate to="/" />} />
            <Route path="/produto_vendas" element={auth ? <ProdutosVenda /> : <Navigate to="/" />} />
            <Route path="/login" element={!auth ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!auth ? <Register /> : <Navigate to="/" />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
