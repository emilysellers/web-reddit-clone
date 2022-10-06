export function renderPost(post) {
    const li = document.createElement('li');

    const p = document.createElement('p');
    p.textContent = post.description;

    li.append(p);
    return li;
}
