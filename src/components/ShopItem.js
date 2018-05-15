import React from 'react';

const ShopItem = ({ product }) => {
  const imgUrl = `assets/img/shop/${product.url}`;
  const price = `£${(product.price).toFixed(2)}`;
  return (
    <div className="shop-item">
      <img src={imgUrl} alt={product.title} />
      <p>{product.title}</p>
      <p><em>{product.desc}</em></p>
      <p><strong>{price}</strong></p>
    </div>
  ) 
}

export default ShopItem;