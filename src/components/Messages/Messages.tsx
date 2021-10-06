import React, { useState } from 'react';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Messages = (props) => {
  const [messageText, setMessageText] = useState('');

  const dialogsElements = props.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  const messagesElements = props.messagesData.map((m) => (
    <Message
      text={m.text}
      avatar='https://via.placeholder.com/150/771796'
      key={m.id}
    />
  ));
  const addMessage = () => {
    props.addMessage();
  };

  return (
    <div>
      <h1>Dialogs</h1>
      <div>
        <div>{dialogsElements}</div>
        <div>
          {messagesElements}
          <div>
            <textarea
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />
            <button onClick={addMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
