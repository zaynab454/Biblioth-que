import React from 'react';

const Message = ({ type, text }) => {
    const messageStyle = {
        color: type === 'error' ? 'red' : 'green',
        fontWeight: 'bold',
    };

    return <p style={messageStyle}>{text}</p>;
};

export default Message;
