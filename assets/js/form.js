// Create variables (global scope)
const formEl = document.getElementById('blogForm');

// Function to save form content as a blog post
function savePost(userBlogPost) {
    let userPosts = localStorage.getItem('userPosts');
    if (!userPosts) {
        userPosts = [];
    } else {
        userPosts = JSON.parse(userPosts);
    }
    userPosts.push(userBlogPost);
    localStorage.setItem('userPosts', JSON.stringify(userPosts));
    console.log(userPosts);
};

// Add event listener to form to save object
formEl.addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve values of form fields
    const userName = document.getElementById('username').value;
    const blogTitle = document.getElementById('title').value;
    const blogContent = document.getElementById('content').value;
    // Model userPost object
    const userPost = {
        userName: userName,
        blogTitle: blogTitle,
        blogContent: blogContent,
    };

    savePost(userPost);
    window.location.href = "blog.html";
});