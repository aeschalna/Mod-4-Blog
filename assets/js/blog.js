const blogEl = document.getElementById('postHere');
const inputUser = document.getElementById('username');
const inputTitle = document.getElementById('title');
const inputContent = document.getElementById('content');
const goBackBtn = document.getElementById('return');
const blogPosts = [];

function init() {
    const allPosts = JSON.parse(localStorage.getItem('userPosts'));

    if (allPosts !== null) {
        renderBlog(allPosts);
    };

};

function renderBlog(allPosts) {
    blogEl.innerHTML = '';

    console.log(allPosts);

    for (let i = 0; i < allPosts.length; i++) {
        const post = allPosts[i];

        console.log(post.userName.value);
        console.log(post.blogTitle.value);
        console.log(post.blogContent.value);

        const div = document.createElement('div');
        div.textContent = post;
        div.setAttribute('data-index', i);

        blogEl.appendChild(div);
    }
}
init();

goBackBtn.addEventListener('click', function () {
    window.location.href = "index.html"
})