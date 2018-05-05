import React, { Component } from 'react';

class Shop extends Component {
  constructor() {
    super();
    this.state = { email: '' };
    this.mailListChange = this.mailListChange.bind(this);
  }

  mailListChange(e) {
    const email = e.target.value; 
    this.setState({ email })
  }

  render() {
    return (
      <div>
        <h1>Shop</h1>
        <div className="mailer-cta">
          <h2>Be the first to know about new items</h2>
          <div className="mailer-form">
            <input 
              value={this.state.email} 
              onChange={this.mailListChange} 
              type="email" placeholder="your email" 
            />
            <button>join</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;