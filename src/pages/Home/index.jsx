import React from 'react';

import { Message } from 'components';
import './Home.sass';


const Home = () => {
    return (
        <section className="home">
            <Message
                avatar="https://img.pngio.com/download-free-png-person-outline-icon-png-person-outline-icon-png-person-icon-png-512_512.png"
                text={"wow!".repeat(100)}
                date={new Date() - Math.random()*10e6}
                isMe={false}
            />            
            <Message
                avatar="https://img.pngio.com/download-free-png-person-outline-icon-png-person-outline-icon-png-person-icon-png-512_512.png"
                text={"wow!".repeat(100)}
                date={new Date() - Math.random()*10e6}
                isMe={true}
            />            
        </section>
    ); 
};

export default Home; 