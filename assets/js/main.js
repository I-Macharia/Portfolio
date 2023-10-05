// Example for handling portfolio item clicks
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        // Add your logic to handle portfolio item clicks here
        alert('Portfolio item clicked!');
    });
});
// Function to fetch GitHub repositories
async function fetchGitHubRepos() {
    const username = "I-Macharia"; // Replace with your GitHub username
    const apiUrl = `https://api.github.com/users/${username}/repos`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Generate portfolio items
        const portfolioSection = document.querySelector('.portfolio');

        data.forEach(repo => {
            const portfolioItem = document.createElement('div');
            portfolioItem.classList.add('portfolio-item');

            portfolioItem.innerHTML = `
                <h2>${repo.name}</h2>
                <p>${repo.description || 'No description available.'}</p>
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            `;

            portfolioSection.appendChild(portfolioItem);
        });
    } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
    }
}

// Call the function to fetch GitHub repositories and populate the portfolio section
window.addEventListener('load', fetchGitHubRepos);


// Example for loading blog posts dynamically
const blogSection = document.querySelector('.blog');

function loadBlogPosts() {
    // Make an AJAX request to load blog posts
    // You can use libraries like Axios or fetch for this
    // Add your logic to populate the blog section with posts
}

// Call the function to load blog posts when the page loads
window.addEventListener('load', loadBlogPosts);
