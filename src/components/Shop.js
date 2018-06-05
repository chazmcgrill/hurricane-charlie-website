import React, { Component } from 'react';
import ShopItem from './ShopItem';
import shopItems from '../globals/shopItems';

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
      await fetch(process.env.MAILER_URL, {
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

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  mailListChange(e) {
    const email = e.target.value; 
    this.setState({ email })
  }

  render() {
    const statusMsg = this.state.msg ? <p>{ this.state.msg }</p> : null;
    return (
      <div>
        
        <div className="shop-container">
          {shopItems.map((itemData) => (
            <ShopItem key={ itemData.id } product={ itemData }/>
          ))}
        </div>

        <div className="mailer-cta">
          <h2>Be the first to know about new items</h2>
          <div className="mailer-form">
            { statusMsg }
            <input 
              value={ this.state.email } 
              onChange={ this.mailListChange } 
              type="email" placeholder="your email" 
            />
            <button onClick={ this.mailListSubmit }>join</button>
          </div>
        </div>

      </div>
    );
  }
}

export default Shop;