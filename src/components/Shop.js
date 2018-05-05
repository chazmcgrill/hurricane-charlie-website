import React, { Component } from 'react';

function emailErrorCheck(email) {
  const emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.length === 0) {
    return "email is required";
  } else if (!email.match(emailRegx)) {
    return "incorrect email format";
  }
  return null
}

class Shop extends Component {
  constructor() {
    super();
    this.state = { email: '', status: null };
    this.mailListChange = this.mailListChange.bind(this);
    this.mailListSubmit = this.mailListSubmit.bind(this);
  }

  mailListSubmit() {
    // email validation
    let status = emailErrorCheck(this.state.email);
    console.log(status);
    // post to database
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
            <button onClick={this.mailListSubmit}>join</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;