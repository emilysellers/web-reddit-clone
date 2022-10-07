/* Imports */
//import '../auth/user.js';

import { getPost, getUser } from '../fetch-utils.js';

/* DOM */
const errorDisplay = document.getElementById('error-display');
const postDescription = document.getElementById('post-description');
const addComment = document.getElementById('add-comment');

/* State */
let post = null;
let error = null;

/* Events */
window.addEventListener('load', async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    if (!id) {
        location.replace('/');
        return;
    }

    const response = await getPost(id);
    error = response.error;
    post = response.data;

    if (error) {
        displayError();
    } else {
        displayPost();
    }
});

// ADD COMMENT EVENT LISTENER

/* Display */
function displayError() {
    if (error) {
        console.log(error);
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}

function displayPost() {
    postDescription.textContent = post.description;
}
