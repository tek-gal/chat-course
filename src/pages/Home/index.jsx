import React from 'react';

import { Message, Dialogs } from 'components';
import './Home.sass';


const Home = () => {
    return (
        <section className="home">
            <Dialogs 
                userId={0}
                items={[
                    {
                        _id: '357be52f82b87b4b58449cfe591b4ae0',
                        text: 'Мы все свидетельствуем Вам глубочайшее наше почтение.',
                        isReaded: true,
                        createdAt: new Date(),
                        user: {
                            _id: '357be52f82b87b4b58449cfe591b4ae0',
                            avatar: 'https://img.pngio.com/download-free-png-person-outline-icon-png-person-outline-icon-png-person-icon-png-512_512.png',
                            fullname: 'Федор Достоевкий',
                            isOnline: true,
                        },
                        unreaded: 3,
                    },
                    {
                        _id: 'bbbc01ec5ec409030d85f6e783383277',
                        text: 'Я инженер',
                        isReaded: true,
                        createdAt: new Date(Math.random(0.7, 0.8)*10e11),
                        user: {
                            _id: 'bbbc01ec5ec409030d85f6e783383277',
                            // avatar: 'https://img.pngio.com/download-free-png-person-outline-icon-png-person-outline-icon-png-person-icon-png-512_512.png',
                            fullname: 'Борис Гребенщиков',
                            isOnline: true,
                        },
                        unreaded: 0,
                    },
                    {
                        _id: Math.random(),
                        text: 'When I think of his dick',
                        isReaded: true,
                        createdAt: new Date(Math.random(0, 0.1)*10e11),
                        user: {
                            _id: 1,
                            avatar: 'https://img.pngio.com/download-free-png-person-outline-icon-png-person-outline-icon-png-person-icon-png-512_512.png',
                            fullname: 'Kovacs',
                            isOnline: true,
                        },
                        unreaded: 5,
                    }
                ]}
            />
            <Message
                avatar="https://img.pngio.com/download-free-png-person-outline-icon-png-person-outline-icon-png-person-icon-png-512_512.png"
                text={"wow!".repeat(100)}
                date={new Date() - Math.random()*10e6}
                isMe={false}
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/100x100/?random=2&nature,water',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/100x100/?random=3&nature,water',
                    },
                ]}
            />            
            <Message
                avatar="https://img.pngio.com/download-free-png-person-outline-icon-png-person-outline-icon-png-person-icon-png-512_512.png"
                text={"wow!".repeat(100)}
                date={new Date() - Math.random()*10e6}
                isMe={true}
                isReaded={true}
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/100x100/?random=2&nature,water',
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/100x100/?random=3&nature,water',
                    },
                ]}
            />            
            <Message
                avatar="https://img.pngio.com/download-free-png-person-outline-icon-png-person-outline-icon-png-person-icon-png-512_512.png"
                date={new Date() - Math.random()*10e6}
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
                    },
                ]}
            />            
            <Message
                avatar="https://img.pngio.com/download-free-png-person-outline-icon-png-person-outline-icon-png-person-icon-png-512_512.png"
                isTyping={true}
            />            
            <Message
                avatar="https://img.pngio.com/download-free-png-person-outline-icon-png-person-outline-icon-png-person-icon-png-512_512.png"
                date={new Date() - Math.random()*10e6}
                audio={'https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3'}
            />
        </section>
    ); 
};

export default Home; 