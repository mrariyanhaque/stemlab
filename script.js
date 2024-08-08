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
      
    };

    let found = false;
    let redirectPage = null;

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

    // Determine the page to redirect to based on the query
    for (const [key, url] of Object.entries(pages)) {
        if (query.includes(key)) {
            redirectPage = url;
            break;
        }
    }

    if (redirectPage) {
        setTimeout(() => {  // Delay redirect to allow image highlight
            if (!found) {
                window.location.href = redirectPage;
            }
        }, 1000);  // Adjust delay if necessary
    } else if (!found) {
        alert('No results found for: ' + query);
    }
}