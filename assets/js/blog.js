// Create variables (global scope)
const blogEl = document.getElementById('postHere');
const inputUser = document.getElementById('username');
const inputTitle = document.getElementById('title');
const inputContent = document.getElementById('content');
const goBackBtn = document.getElementById('return');
const blogPosts = [];

// Function to create/render blog posts
function renderBlog(allPosts) {
    blogEl.innerHTML = '';

    console.log(allPosts);
    // For loop to create element for each post
    for (let i = 0; i < allPosts.length; i++) {
        const post = allPosts[i];

        const div = document.createElement('div');
        div.innerHTML = `
        <h3>${post.userName}</h3>
        <h2>${post.blogTitle}</h2>
        <p>${post.blogContent}</p>
        `;
        div.setAttribute('data-index', i);
        blogEl.appendChild(div);
    }
}
init();

// Function to retrieve posts from local storage
function init() {
    const allPosts = JSON.parse(localStorage.getItem('userPosts'));

    if (allPosts !== null) {
        renderBlog(allPosts);
    };

};

// Add event listener for back btn
goBackBtn.addEventListener('click', function () {
    window.location.href = "index.html"
})