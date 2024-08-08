document.getElementById('search-button').addEventListener('click', function() {
    performSearch();
});

document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const images = document.querySelectorAll('img');
    const pages = {
        'contact': 'contact.html',
        'boards': 'boards.html',
        'sensors': 'sensors.html',
        'motors': 'motors.html',
        'index': 'index.html',
        'jumper': 'jumper.html',
        'resistor': 'resistor.html',
        'breadboard': 'breadboard.html',
        'voltage': 'voltage.html',
        'amp': 'amp.html'
    };
    
    let found = false;

    // Clear previous highlights
    images.forEach(img => img.classList.remove('highlight'));

    // Check for matching alt text and highlight images
    images.forEach(img => {
        const altText = img.alt.toLowerCase();
        if (altText.includes(query)) {
            img.classList.add('highlight');
            img.scrollIntoView({ behavior: 'smooth', block: 'center' });
            found = true;
        }
    });

    // Redirect based on search query
    for (const [key, url] of Object.entries(pages)) {
        if (query.includes(key)) {
            setTimeout(() => {  // Delay redirect to allow image highlight
                if (!found) {
                    window.location.href = url;
                }
            }, 1000);  // Adjust delay if necessary
            return;
        }
    }

    if (!found) {
        alert('No results found for: ' + query);
    }
}