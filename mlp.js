// Carica la sezione MLP in sito.html
function loadMLPSection() {
  const container = document.getElementById('mlp-section-container');
  if (!container) return;

  // Inietta gli stili solo una volta
  if (!document.getElementById('mlp-section-styles')) {
    const style = document.createElement('style');
    style.id = 'mlp-section-styles';
    style.textContent = `
    :root {
      --neuron-input: linear-gradient(135deg, var(--primary-green) 0%, var(--accent-green) 100%);
      --neuron-hidden: var(--gray-200);
      --neuron-output: rgba(255, 255, 255, 0.05);
      --neuron-active: linear-gradient(135deg, var(--primary-green) 0%, var(--primary-green-dark) 100%);
      --neuron-selected: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
    }

    .mlp-section-wrapper {
      width: 100%;
      padding: 30px 0;
      margin: 0;
    }

    .mlp-container {
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      backdrop-filter: blur(10px);
      padding: 30px 15px;
      position: relative;
      overflow: hidden;
    }

    .mlp-wrapper {
      margin-top: 40px;
      position: relative;
      width: 100%;
      height: 350px; /* altezza fissa per evitare oscillazioni */
    }

    svg.connections {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }

    svg.connections line {
      stroke: rgba(255, 255, 255, 0.2);
      stroke-width: 1.5;
      transition: all 0.3s ease;
    }

    svg.connections line.active {
      stroke: var(--primary-green);
      stroke-width: 2.5;
      opacity: 1;
    }

    /* linee collegate ad input non selezionati, rese più leggere */
    svg.connections line.dimmed {
      opacity: 0.15;
      stroke-width: 1.2;
    }

    svg.connections line.photo-connection {
      stroke-dasharray: 5, 5;
      animation: dash 20s linear infinite;
    }

    @keyframes dash {
      to {
        stroke-dashoffset: -100;
      }
    }

    .mlp-network {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 30px;
      padding: 20px 10px;
      height: 100%;
    }


    @media (max-width: 992px) {
      .mlp-section-wrapper {
        display: none;
        }
    }

  

  

    .layer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      flex-shrink: 0;
    }

    /* Photo section - nascosta su mobile */
    .photo-layer {
      display: none;
    }

    .profile-photo-container {
      position: relative;
      width: 120px;
      height: 120px;
    }

    .profile-photo {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid var(--primary-green);
      box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
      transition: transform 0.3s ease;
    }

    .profile-photo:hover {
      transform: scale(1.05);
    }

    .profile-photo-border {
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      border-radius: 50%;
      border: 2px solid rgba(16, 185, 129, 0.3);
      animation: pulse 2.5s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 0.5;
      }
      50% {
        transform: scale(1.05);
        opacity: 1;
      }
    }

    /* Input layer */
    .input-layer {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .input-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 0;
      min-height: 56px;
    }

    .input-label {
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--text-primary);
      text-align: right;
      min-width: 90px;
      line-height: 1.2;
    }

    .input-item .neuron {
      flex-shrink: 0;
    }

    /* Hidden layers - nascoste su mobile */
    .hidden-layer-1 {
      display: none;
    }

    .hidden-layer-2 {
      display: none;
    }

    /* Output layer */
    .output-layer {
      width: 100%;
      max-width: 350px;
      flex-shrink: 0;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .output-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 0;
      margin-bottom: 0;
      min-height: 56px;
      border-radius: 8px;
      transition: background 0.2s;
    }

    .output-item:hover {
      background: rgba(255, 255, 255, 0.05);
    }

    .output-content {
      flex: 1;
      min-width: 0;
    }

    .output-title {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-primary);
      line-height: 1.3;
      margin-bottom: 2px;
    }

    .output-date {
      font-size: 0.72rem;
      color: var(--text-muted);
      font-style: italic;
      margin-bottom: 3px;
    }

    .output-description {
      font-size: 0.72rem;
      color: var(--text-secondary);
      line-height: 1.4;
      display: none; /* Nascosto su mobile */
    }

    /* Neuroni */
    .neuron {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: var(--neuron-hidden);
      border: 2px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      flex-shrink: 0;
      cursor: default;
    }

    .neuron.input {
      background: var(--neuron-input);
      border-color: var(--border-color-strong);
      cursor: pointer;
      box-shadow: none;
    }

    .neuron.input:hover {
      transform: scale(1.1);
      box-shadow: none;
    }

    /* neurone di input selezionato (attivo) in viola */
    .neuron.input.active {
      background: var(--neuron-selected);
      border-color: var(--border-color-strong);
      box-shadow: none;
    }

    /* neurone di output selezionato (attivo) in viola */
    .neuron.output.active {
      background: var(--neuron-selected);
      border-color: var(--border-color-strong);
      box-shadow: none;
    }

    .neuron.hidden {
      background: var(--neuron-hidden);
      border-color: #9ca3af;
    }

    /* neuroni hidden attivi in viola */
    .neuron.hidden.active {
      background: var(--neuron-selected);
      border-color: var(--border-color-strong);
    }

    .neuron.output {
      background: var(--neuron-output);
      border-color: var(--border-color);
    }

    .neuron.active {
      background: var(--neuron-active);
      border-color: var(--primary-green-dark);
      box-shadow: none;
    }

     @media (max-width: 1200px) {
      .mlp-section-wrapper {
        width: 100%;
        padding: 10px 0;
        margin: 0;
      }
  }
    /* TABLET: mostra hidden-layer-1 e hidden-layer-2 */
    @media (min-width: 768px) {
    
      .mlp-network {
        gap: 40px;
        padding: 30px 15px;
      }

      .hidden-layer-1 {
        display: flex;
      }

      .hidden-layer-2 {
        display: flex;
      }

      .neuron {
        width: 36px;
        height: 36px;
        border-width: 2.5px;
      }

      .input-label {
        font-size: 0.9rem;
        min-width: 100px;
      }

      .input-item {
        min-height: 64px;
      }

      .output-item {
        min-height: 64px;
      }

      .output-title {
        font-size: 0.9rem;
      }

      .output-date {
        font-size: 0.75rem;
      }

      .output-description {
        font-size: 0.75rem;
      }
    }

    /* DESKTOP: mostra photo e hidden-layer-2 + description */
    @media (min-width: 992px) {
      .mlp-network {
        gap: 50px;
        padding: 40px 20px;
      }

      .photo-layer {
        display: flex;
      }

      .hidden-layer-2 {
        display: flex;
      }

      .neuron {
        width: 42px;
        height: 42px;
        border-width: 3px;
      }

      .input-label {
        font-size: 0.95rem;
        min-width: 120px;
      }

      .input-item {
        min-height: 72px;
      }

      .output-item {
        min-height: 72px;
      }

      .output-layer {
        max-width: 400px;
      }

      .output-title {
        font-size: 0.95rem;
      }

      .output-date {
        font-size: 0.8rem;
      }

      .output-description {
        display: block; /* Mostra description */
        font-size: 0.8rem;
      }

      .profile-photo-container {
        width: 100px;
        height: 100px;
      }
    }

    /* XL: dimensioni maggiori */
    @media (min-width: 1200px) {
      .mlp-network {
        gap: 60px;
      }

      .neuron {
        width: 48px;
        height: 48px;
      }

      .input-item {
        min-height: 80px;
      }

      .output-item {
        min-height: 80px;
      }

      .input-label {
        font-size: 1rem;
        min-width: 130px;
      }

      .output-title {
        font-size: 1rem;
      }

      .output-date {
        font-size: 0.85rem;
      }

      .output-description {
        font-size: 0.85rem;
      }

      .profile-photo-container {
        width: 150px;
        height: 150px;
      }
    }

    .mlp-section-title {
      text-align: center;
      margin-bottom: 30px;
      font-size: 1.8rem;
      background: linear-gradient(135deg, var(--primary-green), var(--accent-green));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    @media (min-width: 768px) {
      .mlp-section-title {
        font-size: 2.2rem;
      }
    }
    `;
    document.head.appendChild(style);
  }

  const html = `
    <section class="mlp-section-wrapper">
      <div class="container">
      <div class="text-center desktop-bio-text">PhD Student in Deep Learning 
Researcher in Generative AI, Efficient Architectures & Vision Models.  
<strong>Looking for a Research Internship in Generative AI and Vision.</strong>
    </div>
        <div class="mlp-container">
        
          <div class="mlp-wrapper">
           

            <!-- MLP Network View (≥768px) -->
            <svg class="connections"></svg>
            
            <div class="mlp-network">
              <!-- Photo Layer (nascosta su mobile/tablet) -->
              <div class="layer photo-layer">
                <div class="profile-photo-container">
                  <img src="fbotti.png" alt="Filippo Botti" class="profile-photo">
                  <div class="profile-photo-border"></div>
                </div>
              </div>

              <!-- Input Layer -->
              <div class="layer input-layer">
                <div class="input-item">
                  <span class="input-label">Education</span>
                  <div class="neuron input" data-type="education"></div>
                </div>
                <div class="input-item">
                  <span class="input-label">Work Experience</span>
                  <div class="neuron input" data-type="work"></div>
                </div>
                <div class="input-item">
                  <span class="input-label">Top Publications</span>
                  <div class="neuron input" data-type="publications"></div>
                </div>
              </div>

              <!-- Hidden Layer 1 (nascosta su mobile) -->
              <div class="layer hidden-layer-1">
                <div class="neuron hidden"></div>
                <div class="neuron hidden"></div>
                <div class="neuron hidden"></div>
                <div class="neuron hidden"></div>
                <div class="neuron hidden"></div>
                <div class="neuron hidden"></div>
              </div>

              <!-- Hidden Layer 2 (nascosta su mobile/tablet) -->
              <div class="layer hidden-layer-2">
                <div class="neuron hidden"></div>
                <div class="neuron hidden"></div>
                <div class="neuron hidden"></div>
                <div class="neuron hidden"></div>
                <div class="neuron hidden"></div>
                <div class="neuron hidden"></div>
              </div>

              <!-- Output Layer -->
              <div class="layer output-layer" id="output-layer">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  container.innerHTML = html;
  initMLPSection();
}

// Logica MLP, adattata da mlp.html
function initMLPSection() {
  const MLP = {
    svg: null,
    currentType: 'education',
    isResizing: false,
    isMobile: false,

    init() {
      this.svg = document.querySelector('#mlp-section-container svg.connections');
      if (!this.svg) return;

      this.checkMobile();
      this.setupEventListeners();
      
      if (this.isMobile) {
        this.initMobileView();
      } else {
        this.activateInput('education');
      }
      
      let resizeTimeout;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          this.checkMobile();
          if (!this.isMobile) {
            this.redrawAll();
          }
        }, 150);
      });
    },

    checkMobile() {
      this.isMobile = window.innerWidth < 768;
    },

    initMobileView() {
      ['education', 'work', 'publications'].forEach(type => {
        const data = shortCVData[type] || [];
        const container = document.getElementById(`mobile-${type}`);
        if (!container) return;
        
        data.slice(0, 4).forEach(item => {
          const itemDiv = document.createElement('div');
          itemDiv.className = 'mobile-item';
          itemDiv.innerHTML = `
            <div class="mobile-item-title">${item.title}</div>
            <div class="mobile-item-date">${item.date}</div>
            <div class="mobile-item-description">${item.description.replace(/\n/g, '<br>')}</div>
          `;
          container.appendChild(itemDiv);
        });
      });

      const carousel = document.getElementById('mobile-carousel');
      const dots = document.querySelectorAll('.mobile-dot');
      if (!carousel) return;

      let currentIndex = 0;
      let startX = 0;
      let currentX = 0;
      let isDragging = false;

      const updateCarousel = (index) => {
        currentIndex = Math.max(0, Math.min(2, index));
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === currentIndex);
        });
      };

      carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        carousel.style.transition = 'none';
      });

      carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        const currentTransform = -currentIndex * 100;
        const percentage = (diff / carousel.offsetWidth) * 100;
        carousel.style.transform = `translateX(${currentTransform + percentage}%)`;
      });

      carousel.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        carousel.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        const diff = currentX - startX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            updateCarousel(currentIndex - 1);
          } else {
            updateCarousel(currentIndex + 1);
          }
        } else {
          updateCarousel(currentIndex);
        }
      });

      carousel.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        isDragging = true;
        carousel.style.transition = 'none';
        e.preventDefault();
      });

      carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        currentX = e.clientX;
        const diff = currentX - startX;
        const currentTransform = -currentIndex * 100;
        const percentage = (diff / carousel.offsetWidth) * 100;
        carousel.style.transform = `translateX(${currentTransform + percentage}%)`;
      });

      carousel.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        carousel.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        const diff = currentX - startX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            updateCarousel(currentIndex - 1);
          } else {
            updateCarousel(currentIndex + 1);
          }
        } else {
          updateCarousel(currentIndex);
        }
      });

      carousel.addEventListener('mouseleave', () => {
        if (isDragging) {
          isDragging = false;
          carousel.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          updateCarousel(currentIndex);
        }
      });

      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          updateCarousel(index);
        });
      });
    },

    setupEventListeners() {
      document.querySelectorAll('#mlp-section-container .neuron.input').forEach(neuron => {
        neuron.addEventListener('mouseenter', (e) => {
          const type = e.target.dataset.type;
          this.activateInput(type);
        });
      });
    },

    activateInput(type) {
      this.currentType = type;
      this.resetNetwork();
      this.generateOutputs(type);
      this.redrawAll();
      
      const inputNeuron = document.querySelector(`#mlp-section-container .neuron.input[data-type="${type}"]`);
      if (inputNeuron) {
        inputNeuron.classList.add('active');
      }

      setTimeout(() => this.activateLayer('#mlp-section-container .hidden-layer-1'), 100);
      setTimeout(() => this.activateLayer('#mlp-section-container .hidden-layer-2'), 200);
      setTimeout(() => this.activateLayer('#mlp-section-container .output-layer'), 300);
      setTimeout(() => this.highlightInputLines(type), 80);
    },

    resetNetwork() {
      document.querySelectorAll('#mlp-section-container .neuron').forEach(n => n.classList.remove('active'));
      const svg = document.querySelector('#mlp-section-container svg.connections');
      if (svg) {
        svg.querySelectorAll('line').forEach(l => l.classList.remove('active'));
      }
    },

    activateLayer(selector) {
      const layer = document.querySelector(selector);
      if (layer && layer.offsetParent !== null) {
        layer.querySelectorAll('.neuron').forEach(n => n.classList.add('active'));
      }
    },

    generateOutputs(type) {
      const outputLayer = document.querySelector('#mlp-section-container #output-layer');
      if (!outputLayer) return;
      
      const data = shortCVData[type] || [];
      const limitedData = data.slice(0, 4);
      console.log(shortCVData);
      outputLayer.innerHTML = '';
      
      limitedData.forEach(item => {
        const outputItem = document.createElement('div');
        outputItem.className = 'output-item';
        
        outputItem.innerHTML = `
          <div class="neuron output"></div>
          <div class="output-content">
            <div class="output-title">${item.title}</div>
            <div class="output-date">${item.date}</div>
            <div class="output-description">${item.description.replace(/\n/g, '<br>')}</div>
          </div>
        `;
        
        outputLayer.appendChild(outputItem);
      });
    },

    redrawAll() {
      if (!this.svg) return;
      this.svg.innerHTML = '';
      
      const photoLayer = document.querySelector('#mlp-section-container .photo-layer');
      const inputLayer = document.querySelector('#mlp-section-container .input-layer');
      const hidden1 = document.querySelector('#mlp-section-container .hidden-layer-1');
      const hidden2 = document.querySelector('#mlp-section-container .hidden-layer-2');

      const isPhotoVisible = photoLayer && photoLayer.offsetParent !== null;
      const isHidden1Visible = hidden1 && hidden1.offsetParent !== null;
      const isHidden2Visible = hidden2 && hidden2.offsetParent !== null;

      if (isPhotoVisible) {
        this.drawConnections('#mlp-section-container .photo-layer .profile-photo-container', '#mlp-section-container .input-layer .neuron.input', true);
      }

      if (isHidden1Visible) {
        this.drawConnections('#mlp-section-container .input-layer .neuron.input', '#mlp-section-container .hidden-layer-1 .neuron');
      } else {
        this.drawConnections('#mlp-section-container .input-layer .neuron.input', '#mlp-section-container .output-layer .neuron.output');
      }

      if (isHidden1Visible && isHidden2Visible) {
        this.drawConnections('#mlp-section-container .hidden-layer-1 .neuron', '#mlp-section-container .hidden-layer-2 .neuron');
        this.drawConnections('#mlp-section-container .hidden-layer-2 .neuron', '#mlp-section-container .output-layer .neuron.output');
      } else if (isHidden1Visible) {
        this.drawConnections('#mlp-section-container .hidden-layer-1 .neuron', '#mlp-section-container .output-layer .neuron.output');
      }

      setTimeout(() => {
        this.svg.querySelectorAll('line').forEach(line => {
          line.classList.add('active');
        });
      }, 50);
    },

    // evidenzia le linee dell'input selezionato e sbiadisce le altre
    highlightInputLines(type) {
      if (!this.svg) return;
      const lines = this.svg.querySelectorAll('line');
      lines.forEach(line => {
        // rimuovi stato precedente
        line.classList.remove('dimmed');
        
        const classList = line.getAttribute('class') || '';
        const isFromAnyInput = classList.includes('from-education') || classList.includes('from-work') || classList.includes('from-publications');
        const isFromActive = classList.includes(`from-${type}`);

        if (isFromAnyInput && !isFromActive) {
          line.classList.add('dimmed');
        }
      });
    },

    drawConnections(fromSelector, toSelector, isPhoto = false) {
      const fromElements = document.querySelectorAll(fromSelector);
      const toElements = document.querySelectorAll(toSelector);

      fromElements.forEach(from => {
        toElements.forEach(to => {
          this.drawLine(from, to, isPhoto);
        });
      });
    },

    drawLine(from, to, isPhoto = false) {
      const fromRect = from.getBoundingClientRect();
      const toRect = to.getBoundingClientRect();
      const svgRect = this.svg.getBoundingClientRect();

      let x1, y1, x2, y2;

      if (isPhoto) {
        x1 = fromRect.right - svgRect.left;
        y1 = fromRect.top + fromRect.height / 2 - svgRect.top;
      } else {
        x1 = fromRect.left + fromRect.width / 2 - svgRect.left;
        y1 = fromRect.top + fromRect.height / 2 - svgRect.top;
      }

      x2 = toRect.left + toRect.width / 2 - svgRect.left;
      y2 = toRect.top + toRect.height / 2 - svgRect.top;

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', x1);
      line.setAttribute('y1', y1);
      line.setAttribute('x2', x2);
      line.setAttribute('y2', y2);
      
      if (isPhoto) {
        line.classList.add('photo-connection');
      } else if (from.dataset && from.dataset.type) {
        line.classList.add(`from-${from.dataset.type}`);
      }

      this.svg.appendChild(line);
    }
  };

  MLP.init();
}
