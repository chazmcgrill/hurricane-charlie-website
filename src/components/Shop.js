import React from 'react';

const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
      <div className="mailer-cta">
        <h2>Be the first to know about new items</h2>
        <div className="mailer-form">
          <input type="email" placeholder="your email" />
          <button>join</button>
        </div>
      </div>
    </div>
  );
}

export default Shop;