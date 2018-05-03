import React, { Component } from 'react';

function formValidator(data) {
  const { name, email, message } = data;
  const emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const nameRegx = /^[a-zA-Z ]/;
  // const msgRegx = '';
  let errors = { name: null, email: null, message: null };

  // check name
  if (name.length === 0) {
    errors.name = "name is required";
  } else if (!name.match(nameRegx)) {
    errors.name = "invalid characters entered";
  }

  // check email
  if (email.length === 0) {
    errors.email = "email is required";
  } else if (!email.match(emailRegx)) {
    errors.email = "incorrect email format";
  } 

  // check message
  if (message.length < 10) {
    errors.message = "message is too short min length 10 characters";
  }

  const isValid = (() => {
    for (let e in errors) {
      if (errors[e]) return false;
    }
    return true;
  })();

  // return
  return { errMsgs: errors, isValid }; 
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { name: '', email: '', message: '' },
      errMsgs: { name: null, email: null, message: null }
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ 
      data: { 
        ...this.state.data, 
        [e.target.name]: e.target.value 
      } 
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const errors = formValidator(this.state.data);
    const { errMsgs, isValid } = errors;
    console.log(errMsgs);
    if (isValid) {
      this.setState({ data: { name: '', email: '', message: '' }, errMsgs });
    } else {
      this.setState({ errMsgs });
    }
  }

  render() {
    const { name, email, message } = this.state.data;
    let { errMsgs } = this.state;

    return (
      <div className="contact-box">
        <div className="contact-item">
          <h2>say hello...</h2>
          <form>
            {errMsgs.name ? <p>{errMsgs.name}</p> : null}
            <input 
              name="name"
              value={name} 
              placeholder="your name" 
              onChange={this.handleInput} 
            />
            {errMsgs.email ? <p>{errMsgs.email}</p> : null}
            <input 
              name="email"
              value={email} 
              placeholder="your email" 
              onChange={this.handleInput} 
            />
            {errMsgs.message ? <p>{errMsgs.message}</p> : null}
            <textarea 
              name="message"
              value={message}
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