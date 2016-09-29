import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

// form to send a message
class MessagesNewForm extends Component {
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      content: '',
      loading: false,
    };
  };

  // controlled input to store its value in state
  handleChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  // insert a new message when form is submitted
  handleSubmit(event) {
    event.preventDefault();

    // loading state
    this.setState(prevState => ({
      loading: !prevState.loading
    }));

    // call method to insert a new message
    Meteor.call('messages.new', { content: this.state.content }, (err, res) => {
      // handle error
      
      // no more loading state, clean the input
      this.setState(prevState => ({
        loading: !prevState.loading,
        content: '',
      }));
    });
  }

  render() {

    const { content, loading } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="content" value={ content } onChange={ this.handleChange } />
          <button>{ loading ? 'Loading...' : 'Send' }</button>
        </form>
      </div>
    );
  }
};

export default MessagesNewForm;