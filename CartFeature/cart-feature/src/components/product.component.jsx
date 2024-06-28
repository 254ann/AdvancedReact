
import React, { useContext, useState } from 'react';
import CartContext from './UseCartContext.component'


const ProductComponent = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [selectedColor, setSelectedColor] = useState(product.availableColors[0]);

  const handleAddToCart = () => {
    addToCart({ ...product, selectedColor });
  };

  return (
    <div className="product">
      <h2>{product.title}</h2>
      <p>{product.collection}</p>
      <p>{product.description}</p>
      <img
        src={product.images[selectedColor]}
        alt={`${product.title} in ${selectedColor}`}
        style={{ width: '200px', height: '200px' }}
      />
      <p>Available Colors:</p>
      {product.availableColors.map((color) => (
        <button
        className='color-changeBtn'
          key={color}
          onClick={() => setSelectedColor(color)}
          style={{
            backgroundColor: color.toLowerCase(),
            color: 'white',
           
          }}
        >
        </button>
      ))}
      <p>Price: ${product.price}</p>
      <button 
      className='buyBtn'
      onClick={handleAddToCart}>
        Buy Now
        </button>
    </div>
  );
};

export default ProductComponent;