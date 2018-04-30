import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text"/>
          <input type="email"/>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>send</button>
        </form>
      </div>
    );
  }
}

export default Contact;