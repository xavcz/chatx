import React from 'react';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/std:accounts-ui';

// user container
const userComposer = (props, onData) => {
  const currentUser = Meteor.user();
  onData(null, { currentUser });
};

const App = ({ currentUser }) => {
  return currentUser ? 
    <div>Let's chat {currentUser.profile.name} 🌮. Or <a onClick={() => Meteor.logout()}>log out</a></div> 
    : <Accounts.ui.LoginForm />
};

export default composeWithTracker(userComposer)(App);