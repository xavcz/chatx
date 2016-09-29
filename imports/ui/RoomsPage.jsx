import React from 'react';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';

import Messages from '../api/messages/collection.js';

import MessagesItem from './MessagesItem.jsx';
import MessagesNewForm from './MessagesNewForm.jsx';
import UsersOnline from './UsersOnline.jsx';

// room container
const roomContainer = (props, onData) => {
  if (Meteor.subscribe('messages.list').ready()) {
    const messages = Messages.find({}, { limit: 10, sort: { postedAt: 1 } }).fetch();
    onData(null, { messages });
  };
};
// room component
const RoomsPage = ({ currentUser, messages }) => {
  return (
    <div>
      <div>
        { !!messages.length 
          ? messages.map((message, index) => <MessagesItem { ...message }
                                              currentUser={ currentUser }
                                              key={ index } 
                                             />) 
          : <div>No message yet! 😶</div>
        }
      </div>
      <MessagesNewForm currentUser={ currentUser } />
      <UsersOnline currentUser={ currentUser } />
    </div>
  )
};

export default composeWithTracker(roomContainer)(RoomsPage);