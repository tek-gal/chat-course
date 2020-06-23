import React from 'react';
import PropTypes from 'prop-types';
import { Button as BaseButton } from 'antd';
import classnames from 'classnames';
import './Button.sass';


const Button = (props) => {
    const classes = classnames({
        button: true,
        [props.className]: true,
        button__large: props.size === 'large',
    });

    return (
        <BaseButton {...props} className={classes}/>
    );
};

Button.propTypes = {
    className: PropTypes.string,
}

export default Button;