import React from 'react';
import { Input, Empty } from 'antd';

import { Message } from 'components';
import './Messages.sass';


const Messages = ({ items }) => {
    return (
        items.length
            ? items.map(message => <Message key={message._id} {...message} />)
            : <Empty description="Нет сообщений" />
    );
};

export default Messages;