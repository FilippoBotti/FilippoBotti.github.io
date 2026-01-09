// Funzione per caricare la navbar
function loadNavbar(activePage = '') {
  const navbar = `
    <nav class="navbar navbar-expand-xl navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="sito.html">Filippo Botti <span class="d-none d-lg-inline" style="font-size: 0.9rem; font-weight: 400;">PhD Student in Information Technology</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="sito.html#cv-education">Education</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sito.html#cv-work">Work Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sito.html#cv-publications">Publications</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sito.html#cv-teaching">Teaching</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sito.html#cv-skills">R&D</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
  
  const navContainer = document.getElementById('navbar-container');
  if (navContainer) {
    navContainer.innerHTML = navbar;
  }
}

// Funzione per caricare il footer
function loadFooter() {
  const footer = `
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p class="mb-2">&copy; 2026 Filippo Botti. All rights reserved.</p>
            <p class="footer-subtitle mb-0">PhD Student in Information Technology</p>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <div class="footer-links">
              <a href="https://github.com/FilippoBotti" target="_blank" rel="noopener noreferrer" class="footer-link">
                <i class="bi bi-github"></i> GitHub
              </a>
              <a href="https://scholar.google.com/citations?user=jQcJIsQAAAAJ&hl=it" target="_blank" rel="noopener noreferrer" class="footer-link">
                <i class="bi bi-google"></i> Scholar
              </a>
              <a href="https://www.linkedin.com/in/filippo-botti-a42245145/" target="_blank" rel="noopener noreferrer" class="footer-link">
                <i class="bi bi-linkedin"></i> LinkedIn
              </a>
              <a href="mailto:filippo.botti@unipr.it" class="footer-link">
                <i class="bi bi-envelope"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12 text-center">
            <p class="footer-disclaimer mb-0">
              This website is for curriculum vitae purposes only. I do not offer commercial services or consultancy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  `;
  
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = footer;
  }
}

// Funzione per caricare i dati delle pubblicazioni
function getPublicationsData() {
  // I dati vengono caricati da publications.js
  return publicationsData;
}
