import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import './index.css';
import { CartProvider } from "./components/Cart/CartContext";

function App() {
    return <CartProvider>
        <div>
            <Navbar />
            <Product />
            <Footer />
        </div>
    </CartProvider>
}

export default App;