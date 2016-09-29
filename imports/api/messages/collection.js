import { Mongo } from 'meteor/mongo';

const Messages = new Mongo.Collection('messages');

/*
  @schema

  _id : string
  avatar : string
  username : string
  userId : string
  content : string
  postedAt : date

*/

export default Messages;