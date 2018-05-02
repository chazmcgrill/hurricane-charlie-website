import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact-box">
        
        <div className="contact-item">
          <h2>say hello...</h2>
          <form>
            <input type="text" placeholder="your name" />
            <input type="email" placeholder="your email" />
            <textarea name="" id="" cols="30" rows="10" placeholder="type your message here..." />
            <button>send</button>
          </form>
        </div>

        <div className="contact-item contact-text">
          <div>
            <p>Please feel free to contact me with any questions. I'm open to commissions and exhibitions so do get in touch.</p>
            <h2>social</h2>
            <p>You can find me on these social platforms:</p>
            <ul>
              <li>
                <a target="_blank" href="http://www.instagram.com/hurricane.charlie">
                  <i className="fa fa-instagram"></i>Instagram
                </a>
              </li>
              <li>
                <a target="_blank" href="http://twitter.com/hurricanechaz">
                  <i className="fa fa-twitter"></i>Twitter
                </a>
              </li>
              <li>
                <a target="_blank" href="http://www.behance.net/chazhurricane">
                  <i className="fa fa-behance"></i>Behance
                </a>
              </li>
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