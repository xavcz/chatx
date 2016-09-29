import React from 'react';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';

const presenceContainer = (props, onData) => {
  if (Meteor.subscribe('users.online').ready()) {
    const onlineUsers = Meteor.users.find({ 'status.online': true }).fetch();
    onData(null, { onlineUsers });
  }
};
const UsersOnline = ({ onlineUsers, currentUser }) => {
  return (
    <div>
      <div>Online users:</div>
      {
        !!onlineUsers.length 
          ? onlineUsers.map((user, index) => <div key={ index }>{ user.profile.name }</div>)
          : 'No users connected, that\'s weird, you should be there! 😄'
      }
    </div>
  );
};

export default composeWithTracker(presenceContainer)(UsersOnline);