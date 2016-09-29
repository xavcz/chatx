import { Meteor } from 'meteor/meteor';

// return online users
Meteor.publish('users.online', function() {
  return Meteor.users.find(
    { 'status.online': true },
    { fields: { status: 1, profile: 1 } }
  );
});