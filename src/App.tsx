import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import Content from './pages/Content';
import ArticlePage from './pages/ArticlePage';
import Projects from './pages/Projects';
import Lectures from './pages/Lectures';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import CheckoutPage from './pages/CheckoutPage';
import SuccessPage from './pages/SuccessPage';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-primary-bg text-white">
          <Navbar />
          <Cart />
          <main className="flex-grow w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:id" element={<ProductPage />} />
              <Route path="/content" element={<Content />} />
              <Route path="/content/:id" element={<ArticlePage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/lectures" element={<Lectures />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout-old" element={<CheckoutPage />} />
              <Route path="/success" element={<SuccessPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
