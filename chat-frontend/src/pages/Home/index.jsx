import React from 'react';
import { TeamOutlined as Icon_TeamOutlined,
         FormOutlined as Icon_FormOutlined,
         EllipsisOutlined as Icon_EllipsisOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { Status, ChatInput } from 'components';
import { Dialogs, Messages } from 'containers';
import './Home.sass';


const Home = () => {
    return (
        <section className="home">
            <div className="chat">
                <div className="chat__sidebar">
                    <div className="chat__sidebar-header">
                        <div className="chat__sidebar-header-toolbar">
                            <Icon_TeamOutlined />
                            <span>Список диалогов</span>
                        </div>
                        <Button type="link" shape="circle" icon={<Icon_FormOutlined />} />
                    </div>
                    <div className="chat__sidebar-dialogs">
                        <Dialogs userId={0} />
                    </div>
                </div>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div />
                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-username">Гай Юлий Цезарь</b>
                            <div className="chat__dialog-header-status">
                                <Status isOnline={true} />
                            </div>
                        </div>
                        <Button type="link" shape="circle" icon={
                            <Icon_EllipsisOutlined style={{ fontSize:'22px' }}/>
                        } />
                    </div>
                    <div className="chat__dialog-messages">
                        <Messages items={[]} />
                    </div>
                    <div className="chat__dialog-input">
                        <ChatInput />
                    </div>
                </div>
            </div>
        </section>
    ); 
};

export default Home; 