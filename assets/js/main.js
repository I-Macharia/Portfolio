// Example for handling portfolio item clicks
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        // Add your logic to handle portfolio item clicks here
        alert('Portfolio item clicked!');
    });
});

// Example for loading blog posts dynamically
const blogSection = document.querySelector('.blog');

function loadBlogPosts() {
    // Make an AJAX request to load blog posts
    // You can use libraries like Axios or fetch for this
    // Add your logic to populate the blog section with posts
}

// Call the function to load blog posts when the page loads
window.addEventListener('load', loadBlogPosts);
