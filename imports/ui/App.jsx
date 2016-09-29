import React from 'react';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/std:accounts-ui';

import RoomsPage from './RoomsPage.jsx';

// user container
const userComposer = (props, onData) => {
  const currentUser = Meteor.user();
  onData(null, { currentUser });
};
const App = ({ currentUser }) => {
  return currentUser ? <RoomsPage currentUser={currentUser} /> : <Accounts.ui.LoginForm />
};

export default composeWithTracker(userComposer)(App);