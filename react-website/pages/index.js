import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from '/components/product';
import ProductDetails from '/components/ProductDetails';
import ShoppingCart from '/components/ShoppingCart';
import Header from '/components/Header';
import styles from '/App.css'; // Assuming you have a CSS file for styling

const Products = [
 {
    id: 1,
    name: 'Product 1',
    description: 'This is product 1.',
    price: 99.99,
    image: '/images/product1.jpg',
 },
 // ... add more products
];

const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <Switch>
          <Route path="/" exact component={Product} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/cart" component={ShoppingCart} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

// Enhance state management using React hooks.

