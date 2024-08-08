document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    alert(`You searched for: ${query}`);
    // Implement actual search logic here
});