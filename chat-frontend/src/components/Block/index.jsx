import React from 'react';
import classnames from 'classnames';
import './Block.sass';


const Block = ({ children, className }) => {
    const classes = classnames('block', className);
    
    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default Block;