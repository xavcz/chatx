import { Mongo } from 'meteor/mongo';

const Messages = new Mongo.Collection('messages');

/*
  @schema

  _id : string
  username : string
  content : string
  postedAt : date

*/

export default Messages;