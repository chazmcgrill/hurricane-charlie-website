import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <textarea name="" id="" cols="30" rows="10" placeholder="message" />
          <button>send</button>
        </form>

        <div>
          <div>
            <p>Please feel free to contact me with any questions</p>
            <h2>Social</h2>
            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Behance</li>
            </ul>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Contact;