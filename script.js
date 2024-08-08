// Function to handle the search action
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (query) {
        // Redirect to a search results page or perform search logic
        alert(`Searching for: ${query}`);
        // Example: window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
    }
});

// Optional: Handle 'Enter' key press in the search input
document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});