import React, { useContext } from 'react';
import CartContext from './UseCartContext.component'

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img
                src={item.images[item.selectedColor]}
                alt={item.title}
                style={{ width: '50px', height: '50px' }}
              />
              {item.title} - ${item.price} - {item.selectedColor} - Quantity: {item.quantity}
              <button onClick={() => removeFromCart(item.productID, item.selectedColor)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;