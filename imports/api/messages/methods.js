/*

  messages.new : String -> String
  
*/

import { Meteor } from 'meteor/meteor';
import Messages from './collection.js';

Meteor.methods({
  'messages.new'({ content }) {
    // validation on message content
    check(content, String);

    // validation on user connected
    if (!this.userId) {
      throw new Meteor.Error('You cannot post if you are not connected!');
    }
    
    // get current user name
    const user = Meteor.users.findOne({ _id: this.userId });
    const { name: username } = user.profile; // note: profile sucks, but by now I'll use it
    
    // adapt raw 'msg' object to the msg object expected by the collection
    const message = {
      username,
      content,
      postedAt: new Date(),
    };

    // insert new message
    return Messages.insert(message);
  }
})