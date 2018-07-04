import React from 'react';

const ShopItem = ({ product, imgFile }) => {
  const price = `£${(product.price).toFixed(2)}`;
  const soldOut = product.soldOut ? <div className="shop-status">sold out</div> : null;
  const shopUrl = `http://hurricanecharlie.bigcartel.com/product/${product.shopUrl}`;

  return (
    <div className="shop-item">
      <a href={shopUrl} target="_blank">
        <img src={imgFile} alt={product.title} />
      </a>
      <p>{product.title}</p>
      <p><em>{product.desc}</em></p>
      <p><strong>{price}</strong></p>
      { soldOut }
    </div>
  ) 
}

export default ShopItem;