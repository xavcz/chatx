import React from 'react';
import moment from 'moment';

// display a message item
const MessagesItem = ({ picture, username, userId, content, postedAt, currentUser }) => (
  <div className="messages-item">
    <div className="messages-item-picture">
      <img src={picture} alt="🙃" title={username} />
    </div>
    <div className="messages-item-main">
      <div className="messages-item-meta">
        <span 
          className={
            `messages-item-name ${userId === currentUser._id ? 'users-you' : ''}`
        }>
          { username }
        </span>
        <span className="messages-item-date">
          { moment(postedAt).format('MMMM Do YYYY, h:mm:ss a') }
        </span>
      </div>
      <div className="messages-item-content">
        { content }
      </div>
    </div>
  </div>
);

export default MessagesItem;