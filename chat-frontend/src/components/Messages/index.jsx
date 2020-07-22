import React from 'react';
import { Spin, Empty } from 'antd';
import classnames from 'classnames';

import { Message } from 'components';
import './Messages.sass';


const Messages = ({ items, isLoading, hasCurrentDialog }) => {
    const getContent = () => {
        if (!hasCurrentDialog) {
            return <Empty description="Выберете диалог" />;
        } else if (!items.length && isLoading) {
            return (
                <Spin size="large" tip="Загрузка сообщений..." />
            );
        } else {
            return (
                items.length
                    ? items.map(message => <Message key={message._id} {...message} />)
                    : <Empty description="Нет сообщений" />
            );
        }
    };

    const classes = classnames({
        messages: true,
        'messages--loading': isLoading,
    });

    return (
        <div className={classes}>
            {getContent()}
        </div>
    );
};

export default Messages;