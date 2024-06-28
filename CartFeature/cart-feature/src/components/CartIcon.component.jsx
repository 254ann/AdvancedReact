import React, { useContext } from 'react';
import CartContext from './UseCartContext.component'
import { FaShoppingCart } from 'react-icons/fa'; // Using react-icons for the cart icon

const CartIcon = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-icon">
      <FaShoppingCart size={54} />
      <span className="cart-count">{cart.length}</span>
    </div>
  );
};

export default CartIcon;
