import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Readed from './Readed';
import { Time } from 'components';
import { convertCurrentTime } from 'utils/helpers';
import './Message.sass';
import waveSvg from 'assets/img/wave.svg';
import playSvg from 'assets/img/play.svg';
import pauseSvg from 'assets/img/pause.svg';


const Message = (props) => {
    const { avatar, text, date, user, isMe, isReaded, attachments, isTyping, audio } = props;
    const classes = classnames({
        message: true,
        'message--isme': isMe,
        'message--is-audio': !!audio,
        'message--is-typing': isTyping,
        'message--image': attachments && attachments.length === 1,
    });
    const audioElem = useRef(null);
    const [isPlaying, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const togglePlay = () => {
        if (!isPlaying) {
            audioElem.current.play();
        } else {
            audioElem.current.pause();
        }
    };
    useEffect(() => {
        if (audioElem.current) {
            audioElem.current.addEventListener('playing', () => setPlaying(true), false);
            audioElem.current.addEventListener('pause', () => setPlaying(false), false);
            audioElem.current.addEventListener('loadedmetadata', () => {
                const { duration } = audioElem.current;
                setCurrentTime(duration);
            }, false);
            audioElem.current.addEventListener('timeupdate', () => {
                const { currentTime, duration } = audioElem.current;
                setProgress(currentTime / duration * 100);
                setCurrentTime(currentTime);
            }, false);
            audioElem.current.addEventListener('ended', () => setProgress(0), false);
        }
    }, []);

    return (
        <div className={classes}>
            {isMe && <Readed isReaded={isReaded} />}
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.fullname}`}/>
            </div>
            <div className="message__context">
                {
                    !audio && text && 
                    <div className="message__bubble">
                        <p className="message__text">{text}</p>
                    </div>
                }
                {
                    !audio && isTyping && 
                    <div className="message__bubble">
                        <div className="message__typing">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                }
                {
                    audio && 
                    <div className="message__bubble">
                        <div className="message__audio">
                            <audio ref={audioElem} src={audio} preload />
                            <div 
                                className="message__audio-progress"
                                style={{ width: `${progress}%` }}
                            />
                            <div className="message__audio-info">
                                <div className="message__audio-btn">
                                    <button onClick={togglePlay}>
                                        {!isPlaying
                                            ? <img src={playSvg} alt="play-svg"/>
                                            : <img src={pauseSvg} alt="pause-svg"/>}
                                    </button>
                                </div>
                                <div className="message__audio-wave">
                                    <img src={waveSvg} alt="wave-svg" />
                                </div>
                                <div className="message__audio-duration">
                                    {convertCurrentTime(currentTime)}
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className="message__attachments">
                    {
                        attachments && attachments.map((item) => (
                            <div className="message__attachments-item" key={Math.random()   }>
                                <img src={item.url} alt={item.filename} />
                            </div>
                        ))
                    }
                </div>
                {date && <span className="message__date"><Time date={date} /></span>}
            </div>
        </div>
    );
};

Message.defaultProps = {
    user: {},
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.number,
    user: PropTypes.object,
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
    attachments: PropTypes.arrayOf(PropTypes.object),
    isTyping: PropTypes.bool,
    audio: PropTypes.string,
};


export default Message;