import React from 'react';
import { TeamOutlined as Icon_TeamOutlined,
         FormOutlined as Icon_FormOutlined,
         EllipsisOutlined as Icon_EllipsisOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { Messages, Status, ChatInput } from 'components';
import { Dialogs } from 'containers';
import './Home.sass';
import dialogsJSON from 'dialogs.json';

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
                        <Dialogs 
                            userId={0}
                            items={dialogsJSON}
                        />
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
                        <Messages 
                            // items={[
                            //     {
                            //         avatar: "https://img.pngio.com/download-free-png-person-outline-icon-png-person-outline-icon-png-person-icon-png-512_512.png",
                            //         text: "wow!".repeat(100),
                            //         date: new Date() - Math.random()*10e6,
                            //         isMe: false,
                            //         attachments: [
                            //             {
                            //                 filename: 'image.jpg',
                            //                 url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
                            //             },
                            //             {
                            //                 filename: 'image.jpg',
                            //                 url: 'https://source.unsplash.com/100x100/?random=2&nature,water',
                            //             },
                            //             {
                            //                 filename: 'image.jpg',
                            //                 url: 'https://source.unsplash.com/100x100/?random=3&nature,water',
                            //             },
                            //         ],
                            //     },
                            //     {
                            //         avatar: "https://img.pngio.com/download-free-png-person-outline-icon-png-person-outline-icon-png-person-icon-png-512_512.png",
                            //         text: "wow!".repeat(100),
                            //         date: new Date() - Math.random()*10e6,
                            //         isMe: true,
                            //         isReaded: true,
                            //         attachments: [
                            //             {
                            //                 filename: 'image.jpg',
                            //                 url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
                            //             },
                            //             {
                            //                 filename: 'image.jpg',
                            //                 url: 'https://source.unsplash.com/100x100/?random=2&nature,water',
                            //             },
                            //             {
                            //                 filename: 'image.jpg',
                            //                 url: 'https://source.unsplash.com/100x100/?random=3&nature,water',
                            //             },
                            //         ],
                            //     },
                            //     {
                            //         avatar: "https://img.pngio.com/download-free-png-person-outline-icon-png-person-outline-icon-png-person-icon-png-512_512.png",
                            //         date: new Date() - Math.random()*10e6,
                            //         attachments: [
                            //             {
                            //                 filename: 'image.jpg',
                            //                 url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
                            //             },
                            //         ],
                            //     },
                            //     {
                            //         avatar: "https://img.pngio.com/download-free-png-person-outline-icon-png-person-outline-icon-png-person-icon-png-512_512.png",
                            //         isTyping: true,
                            //     },
                            //     {
                            //         avatar: "https://img.pngio.com/download-free-png-person-outline-icon-png-person-outline-icon-png-person-icon-png-512_512.png",
                            //         date: new Date() - Math.random()*10e6,
                            //         audio: 'https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3',
        
                            //     }
                            // ]}
                            items={[]}
                        />
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