/* Imports */
import '../auth/user.js';
import { createPost } from '../fetch-utils.js';

/* DOM */
const postForm = document.getElementById('post-form');
const postErrorDisplay = document.getElementById('error-display');
const postButton = document.getElementById('post-button');

/* State */
let error = null;

/* Events */
postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    postButton.disabled = true;

    const formData = new FormData(postForm);

    const post = {
        description: formData.get('description'),
    };

    const response = await createPost(post);
    error = response.error;
    postButton.disabled = false;

    if (error) {
        displayError();
    } else {
        location.assign('/');
    }
});

/* Display */
function displayError() {
    if (error) {
        postErrorDisplay.textContent = error.message;
    } else {
        postErrorDisplay.textContent = '';
    }
}
