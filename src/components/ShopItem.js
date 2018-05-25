import React from 'react';

const ShopItem = ({ product }) => {
  const imgUrl = `assets/img/shop/${product.url}`;
  const price = `£${(product.price).toFixed(2)}`;
  const soldOut = product.soldOut ? <div className="shop-status">sold out</div> : null;

  return (
    <div className="shop-item">
      <img src={imgUrl} alt={product.title} />
      <p>{product.title}</p>
      <p><em>{product.desc}</em></p>
      <p><strong>{price}</strong></p>
      { soldOut }
    </div>
  ) 
}

export default ShopItem;