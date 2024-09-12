document.addEventListener('DOMContentLoaded', function() {
    // Load page content via AJAX
    function loadPage(page, container) {
        fetch(page)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to load ${page}: ${response.statusText}`);
                return response.text();
            })
            .then(data => {
                container.innerHTML = data;
            })
            .catch(error => {
                console.error(error);
                container.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            });
    }

    // Handle side tab buttons (Summary, .NET, Frontend, MSSQL)
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Handle top navbar links (Home, About Us, Contact Us)
    const navLinks = document.querySelectorAll('.nav-link');
    const pageContents = document.querySelectorAll('.page-content');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');

            // Hide all page content sections
            pageContents.forEach(page => page.classList.remove('active'));

            // Show the clicked page
            document.getElementById(pageId).classList.add('active');

            // Reset active tab buttons since we moved to a new page
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Automatically set the first tab (Summary) as active when home is clicked
            if (pageId === 'home') {
                document.querySelector('.tab-button[data-tab="summary"]').classList.add('active');
                document.getElementById('summary').classList.add('active');
            }
        });
    });

    // Set initial active tab for home page on load
    const homeSection = document.querySelector('#home');
    if (homeSection) {
        // Activate the summary tab by default on load
        document.querySelector('.tab-button[data-tab="summary"]').classList.add('active');
        document.getElementById('summary').classList.add('active');
    }
});
