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
    
    // get current user data
    const rawUser = Meteor.users.findOne({ _id: this.userId });

    // new object for the user data
    const user = {
      picture: rawUser.services.twitter.profile_image_url_https,
      username: rawUser.services.twitter.screenName,
      userId: rawUser._id,
    };
    
    // adapt raw 'msg' object to the msg object expected by the collection
    const message = {
      ...user,
      content,
      postedAt: new Date(),
    };

    // insert new message
    return Messages.insert(message);
  }
})