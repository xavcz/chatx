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
    <div className="users-online">
      <h3>Online users:</h3>
      {
        !!onlineUsers.length 
          ? onlineUsers.map((user, index) => (
              <div 
                key={ index }
                className={ user._id === currentUser._id ? 'users-you' : '' }
              >
                { user.services.twitter.screenName }
              </div>
            ))
          : 'No users connected, that\'s weird, you should be there! 😄'
      }
      <button className="users-logout" onClick={ () => Meteor.logout() }>Log Out</button>
    </div>
  );
};

export default composeWithTracker(presenceContainer)(UsersOnline);