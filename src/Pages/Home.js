import React, {useEffect, useReducer} from 'react';
import './styles/_home.scss';
import Post from '../components/general/post/Post';
import Row from '../components/general/row/Row';
import api from '../api/APIManager';
import Video from '../components/general/video/Video';
let tester = () => {
    api.createPost(
        {
            title: 'Test Entry',
            body: 'This is the body'
        }).then((response) => {
        console.log(response);
    })
};

const initialState = {posts: [], loading: false, displayError: false};

let reducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {...state, loading: true};
        case 'LOADED':
            return { posts: action.payload, loading: false };
        case 'ERROR':
            return {...state, displayError: true, message: 'Something went wrong.', loading: false};
        default:
            return state;
    }
};


export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    let posts = state.posts.map((post) => {
        return <Post body={post.body}/>
    });
    useEffect(() => {
        dispatch({type: 'LOADING'});
        api.getPosts({category: 1}).then((response) => {
            console.log(response);
            dispatch({type: 'LOADED', payload: response.data.posts});
        }).catch(e => {
            dispatch({type: 'ERROR'});
        })
    }, []);
    return (
        <>
            <div className="home-content-container">
                <Row title={"Yard Work"}>
                    {posts}
                </Row>
                <Row title={"Car Work"}>
                    {posts}
                </Row>
                <Row title={"Interior Work"}>
                    {posts}
                </Row>
                <Video/>
                <button onClick={tester}>Tester</button>
            </div>
        </>
    )
}

