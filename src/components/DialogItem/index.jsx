import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';

import { IconReaded, Avatar } from 'components';
import './DialogItem.sass';


const getMessageTime = (time) => {
    return isToday(time)
        ? format(time, 'HH:mm')
        : format(time, 'dd.MM.yyyy');
};


const DialogItem = ({ user, unreaded, isMe, createdAt, text }) => {
    const itemClasses = classnames({
        'dialogs__item': true,
        'dialogs__item--online': user.isOnline,
    });

    return (
        <div className={itemClasses}>
            <div className="dialogs__item-avatar">
                {<Avatar user={user} />}
                {/* <div className="dialogs__item-avatar--online"></div> */}
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    <span>
                        {getMessageTime(createdAt)}
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{text}</p>
                    {
                        (!isMe && unreaded > 0) && 
                            <div className="dialogs__item-info-bottom-count">
                                {unreaded > 9 ? '+' + unreaded : unreaded}
                            </div>
                    }
                    {isMe && <IconReaded isReaded={true} />}
                </div>
            </div>
        </div>
    );
};

DialogItem.propTypes = {
    user: PropTypes.object,
    message: PropTypes.object,
};

export default DialogItem;