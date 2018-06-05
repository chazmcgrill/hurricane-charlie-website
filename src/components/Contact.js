import React, { Component } from 'react';
import CallToAction from './CallToAction';
import socialItems from '../globals/socialItems';
import { formValidator } from '../helpers/validators';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { name: '', email: '', message: '' },
      errMsgs: { name: null, email: null, message: null },
      msgStatus: { msg: null, status: null }
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

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { errMsgs, isValid } = formValidator(this.state.data);

    if (isValid) {
      const { data } = this.state;
      let { msgStatus } = this.state;
      
      try {
        const { ok } = await fetch(process.env.CONTACT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (ok) {
          msgStatus = { msg: "message sent, speak to you soon...", status: "green" };
        }
      } catch (err) {
        msgStatus = { msg: "message failed! please retry.", status: "red" };
      }

      this.setState({
        data: { name: '', email: '', message: '' },
        errMsgs, msgStatus
      });
  
    } else {
      this.setState({ errMsgs });
    }
  }

  render() {
    const { name, email, message } = this.state.data;
    let { errMsgs, msgStatus } = this.state;
    return (
      <div>
        <div className="contact-box">
          <div className="contact-item">
            <h2>say hello...</h2>
            <form>
              {msgStatus.msg ? <p style={{ color: msgStatus.status }}>{ msgStatus.msg }</p> : null}
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
                {socialItems.map(s => (
                  <li key={s.id}>
                    <a target="_blank" href={s.url}>
                      <i className={`fa fa-${s.name}`}></i>{s.name}
                    </a>
                  </li>
                ))}
              </ul>
              <h2>coding</h2>
              <p>I designed and coded this website. For more information please visit my web development portfolio <a target="_blank" href="http://charlietaylorcoder.com">here</a></p>
            </div>
          </div>
        </div>
        <CallToAction />
      </div>
    );
  }
}

export default Contact;