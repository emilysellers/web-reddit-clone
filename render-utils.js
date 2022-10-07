export function renderPost(post) {
    const li = document.createElement('li');

    const a = document.createElement('a');
    a.href = `/post-detail/?id=${post.id}`;

    const p = document.createElement('p');
    p.textContent = post.description;

    a.append(p);
    li.append(a);
    return li;
}

// export function renderComment(comment) {
//     const li = document.createElement('li');
//     li.textContent = comment.text;
//     return li;
// }
