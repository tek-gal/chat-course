import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import classnames from 'classnames';

import './Message.sass';

const Message = (props) => {
    const { avatar, text, date, user, isMe } = props;
    const classes = classnames('message', { 'message--isme': isMe });
    
    return (
        <div className={classes}>
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.fullname}`}/>
            </div>
            <div className="message__context">
                <div className="message__bubble">
                    <p className="message__text">{text}</p>
                </div>
                <span className="message__date">{formatDistanceToNow(date)}</span>
            </div>
        </div>
    );
};

Message.defaultProps = {
    user: {},
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
};


export default Message;