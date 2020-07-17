import React from 'react';
import PropTypes from 'prop-types';

import { generateAvatarFromHash }  from 'utils/helpers'; 
import './Avatar.sass';


const Avatar = ({ user }) => {
    if (user.avatar) {
        return <img className="avatar" src={user.avatar} alt={`${user.fullname} avatar`} />;
    } else {
        const [color1, color2] = generateAvatarFromHash(user._id);
        const firstFullnameChar = user.fullname.charAt(0).toUpperCase();
        
        return (
            <div
                className="avatar avatar--symbol"
                style={{
                    background: 
                        `linear-gradient(135deg, ${color1} 0%, ${color2} 96.52%)`,
                }}
            >
                {firstFullnameChar}
            </div>
        );
    }
};

Avatar.propTypes = {
    user: PropTypes.object,
};

export default Avatar;