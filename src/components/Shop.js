import React, { Component } from 'react';
import ShopItem from './ShopItem';
import shopItems from '../globals/shopItems';
import { emailCheck } from '../helpers/validators';

function validateEmail(email) {
  if (email.length === 0) {
    return "email is required";
  } else if (!emailCheck(email)) {
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
          { statusMsg }
          <div className="mailer-form">
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