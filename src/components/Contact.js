import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <div className="contact-box">
        
        <div className="contact-item">
          <h2>say hello...</h2>
          <form>
            <input 
              name="name"
              value={this.state.name} 
              placeholder="your name" 
              onChange={this.handleInput} 
            />
            <input 
              name="email"
              value={this.state.email} 
              placeholder="your email" 
              onChange={this.handleInput} 
            />
            <textarea 
              name="message"
              value={this.state.message}
              cols="30" rows="10" 
              placeholder="type your message here..." 
              onChange={this.handleInput} 
            />
            <button
              onClick={this.handleSubmit}
            >send</button>
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