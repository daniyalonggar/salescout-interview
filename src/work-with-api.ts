// Write a function that makes a GET request to the JSONPlaceholder API and 
// returns posts that are longer than 100 characters.

// API URL: https://jsonplaceholder.typicode.com/posts
<<<<<<< HEAD

import axios from 'axios';

type APIResponseType = {
    id: number,
    userId: number,
    title: string,
    body: string,
};

async function fetchLongPosts(): Promise<APIResponseType[]> {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const longPosts = response.data.filter((post: APIResponseType) => post.body.length > 100);
        return longPosts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export { fetchLongPosts };  
=======
// Use axios library
type APIResponseType = {
    id: number,
    userId: number
    title: string,
    body: string,
}

async function fetchLongPosts(): Promise<APIResponseType[]> {
    // Your code goes here
    return []
}

module.exports = { fetchLongPosts }
>>>>>>> fdcfbc733ec7b4e1fed69f6da05dfa4761905999
