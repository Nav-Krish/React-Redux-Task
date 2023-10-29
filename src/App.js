import React from "react";
import ProductList from "./Components/ProductList";
import Navbar from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;