/* Imports */
//import '../auth/user.js';

import { getPost, createComment /*getUser*/ } from '../fetch-utils.js';

/* DOM */
const errorDisplay = document.getElementById('error-display');
const postDescription = document.getElementById('post-description');
const addCommentForm = document.getElementById('add-comment');

/* State */
let post = null;
let error = null;

// let user = getUser();

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

addCommentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(addCommentForm);
    const insertComment = {
        description: formData.get('text'),
        post_id: post.id,
    };

    const response = await createComment(insertComment);
    error = response.error;
    if (error) {
        displayError();
    } else {
        displayPost();
    }
});

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

// function displayComments() {
//     commentList.innerHTML = '';

//     for (const comment of comments() {
//     })
// }
