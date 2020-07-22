import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AddMessage extends Component {
       
  state = {
    message: '',
  };
    
    inputChange = event => {
      const { value } = event.target; 
      this.setState(() => ({
        message: value,
      }));
    }

    handleSubmit = event => {
      event.preventDefault()
      this.props.onMessage(this.state.message)
      this.setState(() => ({
        message: '',
      }));
    }

  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit} className="input-group">
		<input type="text" value={this.state.message} name="text" onChange={this.inputChange} className="form-control" placeholder="Enter your message..." />
		<div className="input-group-append">
		<button className="btn submit-button" disabled={this.isDisabled()}>
		  SEND
		</button>
		</div>
	  </form>
	</div>
    );
  }
}

export default AddMessage;