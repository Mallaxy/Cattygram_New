import React from 'react';

const Message = (props) => {
  return (
    <div>
      <div>
        <img src={props.avatar} alt='' />
      </div>
      <div>
        <div>{props.text}</div>
      </div>
    </div>
  );
};

export default Message;
