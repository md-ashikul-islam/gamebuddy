import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './Views/HomeScreen';
import ProductScreen from './Views/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">amazeOn</Link>
        </header>
        <main>
          <Routes>
            <Route path="/products/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
