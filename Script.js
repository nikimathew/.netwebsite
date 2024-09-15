// Define HTML templates for each component
const headerHTML = `
<header>
    <nav class="top-navbar">
        <div class="navbar-container">
            <div class="left">Mayur</div>
            <div class="right">
                <a href="#home" class="nav-link" data-page="home">Home</a>
                <a href="#about" class="nav-link" data-page="about">About Us</a>
                <a href="#contact" class="nav-link" data-page="contact">Contact Us</a>
            </div>
        </div>
    </nav>
</header>
`;

const sideMenuHTML = `
<aside class="side-navbar">
    <button class="tab-button active" data-tab="summary">Summary</button>
    <button class="tab-button" data-tab="dotnet">.NET</button>
    <div class="submenu dotnet-submenu">
        <button data-page="csharp">C#</button>
        <button data-page="mvc">MVC</button>
        <button data-page="dotnetcore">.NET Core</button>
    </div>
    <button class="tab-button" data-tab="mssql">MSSQL</button>
    <button class="tab-button" data-tab="frontend">Frontend</button>
    <div class="submenu frontend-submenu">
        <button data-page="html">HTML</button>
        <button data-page="css">CSS</button>
        <button data-page="bootstrap">Bootstrap</button>
        <button data-page="javascript">JavaScript</button>
        <button data-page="jquery">jQuery</button>
        <button data-page="react">React</button>
    </div>
</aside>
`;

const footerHTML = `
<footer class="footer">
    <div class="footer-left">Mayur</div>
    <div class="footer-center">Copyright © Scorvigo Pvt Ltd</div>
    <div class="footer-right">
        <a href="https://www.instagram.com" target="_blank">
            <img src="—Pngtree—instagram color icon_3995406.png" alt="Instagram" class="social-icon">
        </a>
        <a href="https://www.youtube.com" target="_blank">
            <img src="—Pngtree—youtube social media icon_3572473.png" alt="YouTube" class="social-icon">
        </a>
    </div>
</footer>
`;

// Function to load the HTML content into the specified element
function loadComponent(id, html) {
    document.getElementById(id).innerHTML = html;
}

// Add event listener to load components when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    loadComponent('header', headerHTML);
    loadComponent('side-menu', sideMenuHTML);
    loadComponent('footer', footerHTML);
});
