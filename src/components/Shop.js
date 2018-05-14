import React, { Component } from 'react';

function validateEmail(email) {
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
    this.state = { email: '', msg: null };
    this.mailListChange = this.mailListChange.bind(this);
    this.mailListSubmit = this.mailListSubmit.bind(this);
  }

  async mailListSubmit() {
    const email = { email: this.state.email };
    let msg = validateEmail(email.email);

    if (!msg) {
      await fetch('http://localhost:5002/mailer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(email)
      })
      .then(resp => {
        if (resp.ok) msg = 'You\'ve been added to the mailing list';
      })
      .catch(err => {
        msg = 'Something went wrong, please try again.'
      });
    }
    this.setState({msg})
  }

  mailListChange(e) {
    const email = e.target.value; 
    this.setState({ email })
  }

  render() {
    return (
      <div>
        
        <div className="shop-container">
          <div className="shop-item">
            <img src="assets/img/shop/shop01.jpg" alt="shop-test1"/>
            <p>Tester title</p>
            <p><strong>£30.00</strong></p>
          </div>
          <div className="shop-item">
            <img src="assets/img/shop/shop02.jpg" alt="shop-test2"/>
            <p>Tester title</p>
            <p><strong>£10.00</strong></p>
          </div>
          <div className="shop-item">
            <img src="assets/img/shop/shop03.jpg" alt="shop-test3"/>
            <p>Tester title</p>
            <p><strong>£20.00</strong></p>
          </div>
          <div className="shop-item">
            <img src="assets/img/shop/shop04.jpg" alt="shop-test1"/>
            <p>Tester title</p>
            <p><strong>£30.00</strong></p>
          </div>
          <div className="shop-item">
            <img src="assets/img/shop/shop05.jpg" alt="shop-test2"/>
            <p>Tester title</p>
            <p><strong>£10.00</strong></p>
          </div>
          <div className="shop-item">
            <img src="assets/img/shop/shop06.jpg" alt="shop-test3"/>
            <p>Tester title</p>
            <p><strong>£20.00</strong></p>
          </div>
        </div>

        <div className="mailer-cta">
          <h2>Be the first to know about new items</h2>
          <div className="mailer-form">
            { this.state.msg ? <p>{this.state.msg}</p> : null }
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