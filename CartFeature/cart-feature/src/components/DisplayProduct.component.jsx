import React from 'react';
import ProductComponent from './product.component'

const DisplayProductComponent = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductComponent key={product.productID} product={product} />
      ))}
    </div>
  );
};

export default DisplayProductComponent;