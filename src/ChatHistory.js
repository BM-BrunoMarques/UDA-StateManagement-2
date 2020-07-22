import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class ChatHistory extends Component {
  
  render() {
    const {user} = this.props
    return (
      

            <ul className="message-list">

              {this.props.messageHist.map((message, index) => (
                <li
                  key={index}
                  className={ message.username === user.username  ? 'message sender' : 'message recipient' }>

                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>
    );
  }
}

export default ChatHistory;
