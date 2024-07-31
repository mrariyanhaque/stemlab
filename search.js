document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-query').value.toLowerCase();
    const results = [];

    const data = [
        { name: 'Motors', url: 'motors.html' },
        { name: 'Sensors', url: 'sensors.html' },
        { name: 'Boards', url: 'boards.html' },
        { name: 'Other Components', url: 'others.html' },
        { name: 'Contact', url: 'contact.html' }
    ];

    data.forEach(item => {
        if (item.name.toLowerCase().includes(query)) {
            results.push(item);
        }
    });

    displayResults(results);
});

function displayResults(results) {
    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = '';

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>No results found</p>';
    } else {
        const ul = document.createElement('ul');
        results.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.url;
            a.textContent = item.name;
            li.appendChild(a);
            ul.appendChild(li);
        });
        resultsDiv.appendChild(ul);
    }
}