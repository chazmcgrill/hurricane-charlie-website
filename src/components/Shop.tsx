import React, { Component } from 'react';
import ShopItem from './ShopItem';
import { shopItems } from '../globals/shopItems';
import { emailCheck } from '../helpers/validators';

import imageImport from '../helpers/imageImport';

const images = imageImport(require.context('../images/shop', false, /\.(png|jpe?g|svg)$/));

function validateEmail(email: string): string | null {
  if (email.length === 0) {
    return "email is required";
  } else if (!emailCheck(email)) {
    return "incorrect email format";
  }
  return null
}

class Shop extends Component {
    state = {
      email: '',
      msg: null,
    };

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  mailListSubmit = async (): Promise<void> => {
    const email = { email: this.state.email };
    let msg = validateEmail(email.email);

    if (!msg) {
      try {
        await fetch(process.env.MAILER_URL!, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(email)
        })
        msg = 'You\'ve been added to the mailing list';
      } catch (error) {
        msg = 'Something went wrong, please try again.';
      }
    }
    this.setState({msg})
  }

  mailListChange(e: React.FormEvent<HTMLInputElement>): void {
    const email = e.currentTarget.value; 
    this.setState({ email })
  }

  render() {
    const statusMsg = this.state.msg ? <p>{ this.state.msg }</p> : null;
    return (
      <div>
        <div className="shop-container">
          {shopItems.map((itemData) => (
            <ShopItem key={ itemData.id } product={ itemData } imgFile={images[itemData.url]}/>
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