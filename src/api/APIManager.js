import axios from 'axios';
let createPost = (data) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:8080/addPost', {
            ...data
        }).then((response) => {
            resolve(response);
        }).catch(e => {
            reject(e);
        });
    })
};
let getPosts = (query) => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:8080/getPosts', {
            params: {
                ...query
            }
        }).then((response) => {
            resolve(response);
        }).catch(e => {
            reject(e);
        })
    })
};
let manager = {
    createPost: createPost,
    getPosts: getPosts
};
export default manager;