import React from 'react';
import moment from 'moment';

// display a message item
const MessagesItem = ({ content, username, postedAt }) => (
  <div>
    [{ moment(postedAt).format('MMMM Do YYYY, h:mm:ss a') }] &lt;{ username }&gt; { content }
  </div>
);

export default MessagesItem;