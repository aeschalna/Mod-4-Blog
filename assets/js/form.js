const formEl = document.getElementById('blogForm');
const userName = document.getElementById('username').value;
const blogTitle = document.getElementById('title').value;
const blogContent = document.getElementById('content').value;

formEl.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log(userName);

    const userBlogPost = {
        userName: userName,
        blogTitle: blogTitle,
        blogContent: blogContent,
    };

    console.log(userBlogPost.userName.value);
    console.log(userBlogPost.blogTitle.value);
    console.log(userBlogPost.blogContent.value);

    savePost(userBlogPost);
    window.location.href = "blog.html";
});

function savePost(userBlogPost) {
    let userPosts = localStorage.getItem('userBlogPost');
    if (!userPosts) {
        userPosts = [];
    } else {
        userPosts = JSON.parse(userPosts);
    }
    userPosts.push(userBlogPost);
    localStorage.setItem('userPosts', JSON.stringify(userPosts));
    console.log(userPosts);
};
