import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';

import { IconReaded, Avatar } from 'components';
import './DialogItem.sass';


const getMessageTime = (time) => {
    return isToday(time)
        ? format(new Date(time), 'HH:mm')
        : format(new Date(time), 'dd.MM.yyyy');
};


const DialogItem = ({ _id, user, unreaded, isMe, isCurrent, createdAt, text, onSelect }) => {
    const itemClasses = classnames({
        'dialogs__item': true,
        'dialogs__item--online': user.isOnline,
        'dialogs__item--is-current': isCurrent,
    });

    return (
        <div className={itemClasses} onClick={onSelect.bind(this, _id)}>
            <div className="dialogs__item-avatar">
                {<Avatar user={user} />}
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