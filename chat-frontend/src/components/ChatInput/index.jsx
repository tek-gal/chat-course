import React, { useState } from 'react';
import propTypes from 'prop-types';
import { SmileOutlined, CameraOutlined, AudioOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';


import './ChatInput.sass';


const ChatInput = () => {
    const [value, setValue] = useState('');
    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                <Button type="link" shape="circle" icon={<SmileOutlined />} />
            </div>
            <Input
                onChange={e => setValue(e.target.value)}
                size="large"
                placeholder='Введите текст сообщения...'
            />
            <div className="chat-input__actions">
                <Button type="link" shape="circle" icon={<CameraOutlined />} />
                {
                    value
                        ? <Button type="link" shape="circle" icon={<CheckCircleOutlined />} />
                        : <Button type="link" shape="circle" icon={<AudioOutlined />} />
                }
            </div>
        </div>
    );
};

ChatInput.propTypes = {};

export default ChatInput;
