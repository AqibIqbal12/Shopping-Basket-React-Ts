import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPage from './pages/CartPage'
import Navigation from './components/Navigation';
import Footer from './components/Footer/Footer'

const RoutesConfig = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/productDetails/:id" element={<ProductDetailsPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer/>
        </Router>
    )
}
export default RoutesConfig;
