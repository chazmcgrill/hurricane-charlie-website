import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact-box">
        
        <div className="contact-item">
          <h2>message me</h2>
          <form>
            <input type="text" placeholder="your name" />
            <input type="email" placeholder="your email" />
            <textarea name="" id="" cols="30" rows="10" placeholder="type your message here..." />
            <button>send</button>
          </form>
        </div>

        <div className="contact-item contact-text">
          <div>
            <h2>say hello...</h2>
            <p>Please feel free to contact me with any questions. I'm open to commissions and exhibitions so do get in touch.</p>
            <h2>social</h2>
            <p>You will find me on these social platforms:</p>
            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Behance</li>
            </ul>
            <h2>coding</h2>
            <p>I designed and coded this website. For more information please visit my web development portfolio <a target="_blank" href="http://charlietaylorcoder.com">here</a></p>
          </div>
        </div>

      </div>
    );
  }
}

export default Contact;