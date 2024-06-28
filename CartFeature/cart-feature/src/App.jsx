import React from 'react';
import { CartProvider } from './components/UseCartContext.component'
import DisplayProductComponent from './components/DisplayProduct.component'
import Cart from './components/cart.component'
import CartIcon from './components/CartIcon.component'
import './App.css'; 
import {jordan_black,jordan_orange, jordan_red} from './assets/index'
import { adidas_black,adidas_green,adidas_white } from './assets/index';
import { nike_blue,nike_grey,nike_white } from './assets/index';

const initialProducts = [
  {
    title: "Jordan Proto Lyte",
    collection: "Running Collection",
    description: "Lightweight and breathable, perfect for running.",
    availableColors: ["Red", "Black", "Orange"],
    price: 245,
    productID: 0,
    images: {
      Red: jordan_red,
      Black: jordan_black,
      Orange: jordan_orange,
    },
  },
  {
    title: "Nike Air Zoom Pegasus",
    collection: "Running Collection",
    description: "Designed for comfort and performance.",
    availableColors: ["Blue", "White", "Grey"],
    price: 180,
    productID: 1,
    images: {
      Blue: nike_blue,
      White: nike_white,
      Grey: nike_grey,
    },
  },
  {
    title: "Adidas Ultraboost",
    collection: "Running Collection",
    description: "Boost technology for ultimate energy return.",
    availableColors: ["Black", "White", "Green"],
    price: 200,
    productID: 2,
    images: {
      Black: adidas_black,
      White: adidas_white,
      Green: adidas_green,
    },
  },
  
];


const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <header className="app-header">
          <CartIcon />
        </header>
        <main>
          <DisplayProductComponent products={initialProducts} />
          <Cart />
        </main>
      </div>
    </CartProvider>
  );
};

export default App;
