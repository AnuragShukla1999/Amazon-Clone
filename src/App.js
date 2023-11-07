import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import SearchResults from './components/SearchResults';
import ProductPage from './components/ProductPage';
import Checkout from './components/Checkout';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/search' element={<SearchResults/>} />
            <Route path='/product/:id' element={<ProductPage/>} />
            <Route path='/checkout' element={<Checkout/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
