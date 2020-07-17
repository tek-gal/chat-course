import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import './Status.sass';


const Status = ({ isOnline }) => {
    const classes = classnames({
        'status': true,
        'status--online': isOnline,
    });

    return (
        <span className={classes}>
            { isOnline ? 'онлайн' : 'оффлайн' }
        </span>
    );
};

Status.propTypes = {
    isOnline: propTypes.bool,
};

export default Status;