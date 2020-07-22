import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddMessage from './AddMessage';
import ChatHistory from './ChatHistory';


class ChatWindow extends Component {
  
  onMessage = message => {
    //The callback is getting called.
    this.props.onMessage(this.props.user.username, message);
  };

  render() {
    const {user} = this.props
    return (
      
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.userName}</div>

		  <ChatHistory user={this.props.user} messageHist={this.props.messageHist} />            
		  <AddMessage onMessage={this.onMessage} />
          </div>
    );
  }
}

export default ChatWindow;
