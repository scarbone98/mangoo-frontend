import React from 'react';
import './_video.scss';
import { Player } from 'video-react';
export default (props) => {
    const {src} = props;
    return (
        <video controls={true}>
            <source src="http://192.168.0.102:9001/media/264" type="video/mp4" size="576"/>
        </video>
    )
}

