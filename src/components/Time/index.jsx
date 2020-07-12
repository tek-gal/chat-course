import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';


const Time = ({ date }) => {
    return (
        <>
            {formatDistanceToNow(date, { addSuffix: true, locale: ruLocale })}
        </>
    );
};

export default Time;