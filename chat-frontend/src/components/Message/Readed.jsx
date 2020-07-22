import React from 'react';

import { IconReaded } from 'components'; 


const Readed = ({ isReaded }) => {
    return (
        <div className="message__readed">
            <IconReaded isReaded={isReaded} />
        </div>
    );
};

export default Readed;
