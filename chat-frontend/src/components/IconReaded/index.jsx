import React from 'react';
import PropTypes from 'prop-types';

import readedSvg from 'assets/img/readed.svg';
import noreadedSvg from 'assets/img/noreaded.svg';


const IconReaded = ({ isReaded }) => {
    const classes = 'message__icon-readed message__icon-readed--no'

    return (
        isReaded
            ? <img className={classes} src={readedSvg} alt="readed"/>
            : <img className={classes} src={noreadedSvg} alt="noreaded"/>
    );
};

IconReaded.propTypes = {
    isReaded: PropTypes.bool,
};

export default IconReaded;
