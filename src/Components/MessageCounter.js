import React from 'react';

const MessageCounter = (props) => {
    return (
        <div
            style={{
                transition: '0.5s',
                color: props.message.length > 185 ? 'red' : ''
            }}>
            {0 + props.message.length}/{200 - props.message.length} {props.message.length > 185 ? 'Reaching message limit' : ''}
        </div>

    )
}

export default MessageCounter;