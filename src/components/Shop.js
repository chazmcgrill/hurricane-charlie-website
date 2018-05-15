import React, { Component } from 'react';
import ShopItem from './ShopItem';

function validateEmail(email) {
  const emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.length === 0) {
    return "email is required";
  } else if (!email.match(emailRegx)) {
    return "incorrect email format";
  }
  return null
}

const shopItems = [
  { id: 1, url: "shop01.jpg", title: "Mushroom Lumberjack", price: 9.95, desc: "monochrome screenprint" },
  { id: 2, url: "shop02.jpg", title: "Patterned Beetle", price: 22.50, desc: "five colour screenprint" },
  { id: 3, url: "shop03.jpg", title: "Desert Smoker", price: 3.50, desc: "glossy giclee full colour" },
  { id: 4, url: "shop04.jpg", title: "Robot Workshop", price: 9.70, desc: "art stock giclee" },
  { id: 5, url: "shop05.jpg", title: "Patterned Butterfly", price: 22.50, desc: "five colour screenprint" },
  { id: 6, url: "shop06.jpg", title: "Desert Portrait", price: 5.50, desc: "glossy giclee full colour" },
];

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
          {shopItems.map((itemData) => (
            <ShopItem key={itemData.id} product={itemData}/>
          ))}
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