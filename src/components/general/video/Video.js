import React, {useRef, useEffect, useReducer} from 'react';
import styles from './_video.scss';


const reducer = (state, action) => {
    switch (action.type) {
        case 'PLAY':
            return {...state, playing: true};
        case 'PAUSE':
            return {...state, playing: false};
        case 'ENDED':
            return {...state, ended: true, playing: false};
        case 'RESTART':
            return {...state, ended: false, playing: true};
        case 'VIDEO_UPDATE':
            return {...state, percentage: action.payload};
        case 'PREVIEW_ENABLE':
            return {...state, previewObject: {display: true, coords: action.payload.coords, time: action.payload.time}};
        case 'PREVIEW_DISABLE':
            return {...state, previewObject: {display: false}};
        default:
            return state;
    }
};

export default (props) => {
    let videoRef = useRef(null);
    const onPlayPressed = () => {
        videoRef.current.play();
        if (state.ended) {
            dispatch({type: 'RESTART'});
        } else {
            dispatch({type: 'PLAY'});
        }
    };
    const onPausePressed = () => {
        videoRef.current.pause();
        dispatch({type: 'PAUSE'});
    };
    const onProgressPreviewEnable = (e) => {
        let video = videoRef.current;
        let rect = e.target.getBoundingClientRect();
        dispatch({type: 'PREVIEW_ENABLE', payload: {coords: {x: e.pageX - rect.left}, time: video.currentTime}});
    };
    const onProgressPreviewDisable = () => {
        dispatch({type: 'PREVIEW_DISABLE'});
    };
    const fullScreen = () => {
        videoRef.current.requestFullscreen().then(() => {

        });
    };


    useEffect(() => {
        let video = videoRef.current;
        video.addEventListener('ended', () => {
            dispatch({type: 'ENDED'});
        });
        video.addEventListener('timeupdate', () => {
            dispatch({type: 'VIDEO_UPDATE', payload: (video.currentTime / video.duration) * 100});
        });
    }, []);


    const initialState = {
        playing: false,
        ended: false,
        percentage: 0,
        previewObject: {display: false}
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const {src} = props;
    const {previewObject, percentage, playing, ended} = state;
    return (
        <div className="video-container">
            <video ref={videoRef}>
                <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4"/>
            </video>
            <div className="video-bottom-bar">
                <div className="video-bottom-bar-left">
                    <i className={`fas ${ended ? 'fa-redo' : 'fa-play'} ${playing && 'active'}`}
                       onClick={onPlayPressed}/>
                    <i className={`fas fa-pause`} onClick={onPausePressed}/>
                    <div className="video-progress-bar" style={{width: `${percentage}%`}}
                         onMouseMove={onProgressPreviewEnable} onMouseLeave={onProgressPreviewDisable}/>
                    {previewObject.display &&
                    <div style={{
                        position: 'absolute',
                        width: 125,
                        left: previewObject.coords.x,
                        bottom: 25
                    }}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Big_buck_bunny_long_shot.ogv/800px--Big_buck_bunny_long_shot.ogv.jpg"
                            alt=""/>
                    </div>
                    }
                </div>
                <div>
                    <i className="fas fa-compress-arrows-alt" onClick={fullScreen}/>
                </div>
            </div>
        </div>
    )
}

