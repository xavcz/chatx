import { Meteor } from 'meteor/meteor';
import Messages from '../collection.js';

Meteor.publish('messages.list', function() {
  // return the 10 last messages
  return Messages.find({}, { limit: 10, sort: { postedAt: -1 } });
});