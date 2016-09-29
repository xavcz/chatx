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
const App = ({ currentUser }) => (
  <div className="main">
    <h1>Twack</h1>
    <h3>Like Slack, but with Twitter accounts</h3>
    { currentUser ? <RoomsPage currentUser={currentUser} /> : <Accounts.ui.LoginForm /> }
  </div>
);

export default composeWithTracker(userComposer)(App);