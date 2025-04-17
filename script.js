const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/perryfeinstein.com/8886648850?amount=1')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        });
}


fetch('navbar.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('navbar').innerHTML = html;

        // Read the data-section attribute from <body>
        const section = document.body.dataset.section;
        if (!section) return;

        // Highlight the correct link
        const activeLink = document.querySelector(`a[data-section="${section}"]`);
        if (activeLink) activeLink.classList.add('active');
    });