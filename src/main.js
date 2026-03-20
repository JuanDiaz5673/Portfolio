import './style.css';

/* ═══════════════════════════════════════════
   Internationalization
   ═══════════════════════════════════════════ */
let currentLang = localStorage.getItem('portfolio-lang') || 'en';

const i18n = {
  en: {
    heroTitle: "Full-Stack Web Developer",
    projectsLabel: "Projects",
    projectsTitle: "What I've Built",
    projectsSubtitle: "Live websites — click any card to explore",
    contactLabel: "Contact",
    contactTitle: "Let's Connect",
    emailLabel: "Email",
    phoneLabel: "Phone",
    builtBy: "Built by",
    visitSite: "Visit Site",
    clickToInteract: "Click to interact",
    stopInteracting: "Stop interacting",
    showLive: "Show live preview",
    showScreenshot: "Show screenshot",
  },
  es: {
    heroTitle: "Desarrollador Web Full-Stack",
    projectsLabel: "Proyectos",
    projectsTitle: "Lo Que He Construido",
    projectsSubtitle: "Sitios web en vivo — haz clic en cualquier tarjeta para explorar",
    contactLabel: "Contacto",
    contactTitle: "Conectemos",
    emailLabel: "Correo",
    phoneLabel: "Telefono",
    builtBy: "Creado por",
    visitSite: "Visitar Sitio",
    clickToInteract: "Clic para interactuar",
    stopInteracting: "Dejar de interactuar",
    showLive: "Mostrar vista en vivo",
    showScreenshot: "Mostrar captura",
  },
};

const projectDescriptions = {
  en: {
    yupidecoracion: "E-commerce platform for home decorations featuring OCR-powered product recognition and secure user authentication.",
    alexasfashion: "Fashion brand website with automated content management powered by Puppeteer for dynamic product updates.",
    polloinka: "Restaurant website for a Peruvian chicken eatery showcasing the menu, location, and brand story.",
    sebaseba: "Professional business website for a local service provider with a clean, modern single-page layout.",
    dreasneedleworks: "Handcrafted business website for a needlework artisan featuring custom typography and a warm brand identity.",
  },
  es: {
    yupidecoracion: "Plataforma de comercio electronico para decoraciones del hogar con reconocimiento de productos por OCR y autenticacion segura.",
    alexasfashion: "Sitio web de moda con gestion de contenido automatizada impulsada por Puppeteer para actualizaciones dinamicas de productos.",
    polloinka: "Sitio web de restaurante para una polleria peruana que muestra el menu, la ubicacion y la historia de la marca.",
    sebaseba: "Sitio web profesional para un proveedor de servicios local con un diseno limpio y moderno de una sola pagina.",
    dreasneedleworks: "Sitio web artesanal para una artesana de costura con tipografia personalizada y una identidad de marca calida.",
  },
};

function t(key) {
  return i18n[currentLang][key] || i18n.en[key] || key;
}

function getDescription(slug) {
  return projectDescriptions[currentLang][slug] || projectDescriptions.en[slug];
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.documentElement.lang = currentLang;

  // Update toggle button text
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.querySelector('.lang-flag').textContent = currentLang === 'en' ? 'ES' : 'EN';
  }
}

/* ═══════════════════════════════════════════
   Project Data
   ═══════════════════════════════════════════ */
const IFRAME_W = 1280;
const IFRAME_H = 720;

const projects = [
  {
    name: "Yupi Decoracion",
    slug: "yupidecoracion",
    url: "https://yupidecoracion.pages.dev",
    get description() { return getDescription('yupidecoracion'); },
    tech: [
      { label: "Express 4", type: "framework" },
      { label: "React 18", type: "framework" },
      { label: "Vite", type: "technology" },
      { label: "JavaScript", type: "language" },
      { label: "SQLite", type: "database" },
      { label: "tesseract.js", type: "technology" },
    ],
  },
  {
    name: "Alexa's Fashion",
    slug: "alexasfashion",
    url: "https://alexasfashion.pages.dev",
    get description() { return getDescription('alexasfashion'); },
    tech: [
      { label: "Node.js", type: "technology" },
      { label: "Puppeteer", type: "technology" },
      { label: "JavaScript", type: "language" },
    ],
  },
  {
    name: "Pollo Inka",
    slug: "polloinka",
    url: "https://polloinka.pages.dev",
    get description() { return getDescription('polloinka'); },
    tech: [
      { label: "Express 5", type: "framework" },
      { label: "JavaScript", type: "language" },
      { label: "HTML", type: "language" },
      { label: "CSS", type: "language" },
    ],
  },
  {
    name: "Seba Seba",
    slug: "sebaseba",
    url: "https://sebaseba.pages.dev",
    get description() { return getDescription('sebaseba'); },
    tech: [
      { label: "Express 5", type: "framework" },
      { label: "JavaScript", type: "language" },
      { label: "HTML", type: "language" },
      { label: "CSS", type: "language" },
    ],
  },
  {
    name: "Drea's Needleworks",
    slug: "dreasneedleworks",
    url: "https://dreasneedleworks.pages.dev",
    get description() { return getDescription('dreasneedleworks'); },
    tech: [
      { label: "HTML", type: "language" },
      { label: "CSS", type: "language" },
      { label: "JavaScript", type: "language" },
      { label: "Google Fonts", type: "technology" },
    ],
  },
];

/* ═══════════════════════════════════════════
   SVG Icons (inline)
   ═══════════════════════════════════════════ */
const icons = {
  externalLink: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  globe: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  arrowUpRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
  mouseClick: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 9V4.5A2.5 2.5 0 0 1 14 4.5V9"/><path d="M7.03 9h9.94A2 2 0 0 1 19 11.03v5.44A5.53 5.53 0 0 1 13.5 22h-3A5.53 5.53 0 0 1 5 16.47v-5.44A2 2 0 0 1 7.03 9z"/></svg>`,
};

/* ═══════════════════════════════════════════
   Site Preview — iframe embed logic
   ═══════════════════════════════════════════ */
function createSitePreview(project, container, { scrollable = false, maxHeight = 240 } = {}) {
  const state = { scale: 0.25, isMobile: false, useFallback: false, interacting: false, containerHeight: 0 };

  function render() {
    const showThumbnail = state.useFallback || (state.isMobile && !scrollable);

    let html = '';
    if (showThumbnail) {
      html = `
        <img src="/thumbnails/${project.slug}.png" alt="Preview of ${project.name}" loading="lazy" />
      `;
    } else {
      const iframeHeight = scrollable && state.containerHeight && state.scale
        ? Math.round(state.containerHeight / state.scale)
        : IFRAME_H;
      const pointerEvents = (scrollable && state.interacting) ? 'auto' : 'none';
      const scrolling = (scrollable && state.interacting) ? 'auto' : 'no';
      const overflow = (scrollable && state.interacting) ? 'auto' : 'hidden';

      html = `
        <iframe
          src="${project.url}"
          title="Preview of ${project.name}"
          scrolling="${scrolling}"
          loading="lazy"
          style="width:${IFRAME_W}px;height:${iframeHeight}px;transform:scale(${state.scale});transform-origin:top left;pointer-events:${pointerEvents};border:none;overflow:${overflow};"
        ></iframe>
      `;

      if (scrollable && !state.interacting) {
        html += `
          <div class="interact-overlay" data-action="start-interact">
            <div class="interact-badge">
              ${icons.mouseClick}
              <span>${t('clickToInteract')}</span>
            </div>
          </div>
        `;
      }

      if (scrollable && state.interacting) {
        html += `<button class="stop-interact" data-action="stop-interact">${t('stopInteracting')}</button>`;
      }
    }

    if (!scrollable) {
      html += `<div class="preview-fade"></div>`;
      html += `
        <button class="preview-toggle" title="${state.useFallback ? t('showLive') : t('showScreenshot')}" data-action="toggle">
          ${icons.globe}
        </button>
      `;
    }

    container.innerHTML = html;

    // Attach event listeners
    const toggleBtn = container.querySelector('[data-action="toggle"]');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        state.useFallback = !state.useFallback;
        render();
      });
    }

    const interactOverlay = container.querySelector('[data-action="start-interact"]');
    if (interactOverlay) {
      interactOverlay.addEventListener('click', (e) => {
        e.stopPropagation();
        state.interacting = true;
        render();
      });
    }

    const stopBtn = container.querySelector('[data-action="stop-interact"]');
    if (stopBtn) {
      stopBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        state.interacting = false;
        render();
      });
    }
  }

  // ResizeObserver for scaling
  const observer = new ResizeObserver(([entry]) => {
    const width = entry.contentRect.width;
    const newScale = width / IFRAME_W;
    const newIsMobile = width < 500;
    const newContainerHeight = entry.contentRect.height;

    if (state.scale !== newScale || state.isMobile !== newIsMobile || state.containerHeight !== newContainerHeight) {
      state.scale = newScale;
      state.isMobile = newIsMobile;
      state.containerHeight = newContainerHeight;

      if (!scrollable) {
        const scaledHeight = newIsMobile ? 200 : Math.min(Math.round(IFRAME_H * newScale), maxHeight);
        container.style.height = scaledHeight + 'px';
      }

      render();
    }
  });

  observer.observe(container);
  render();

  return { destroy: () => observer.disconnect(), render, state };
}

/* ═══════════════════════════════════════════
   Render Project Cards
   ═══════════════════════════════════════════ */
const previewInstances = [];

function renderProjects() {
  const grid = document.getElementById('projects-grid');

  // Clean up existing previews
  previewInstances.forEach((inst) => inst.destroy());
  previewInstances.length = 0;
  grid.innerHTML = '';

  projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.transitionDelay = `${index * 80}ms`;

    const domain = `${project.slug}.pages.dev`;

    card.innerHTML = `
      <div class="site-preview" data-preview></div>
      <div class="card-body">
        <div class="card-header">
          <div>
            <div class="card-name">${project.name}</div>
            <a href="https://${domain}" target="_blank" rel="noopener noreferrer" class="card-domain" onclick="event.stopPropagation()">
              ${domain}
              ${icons.arrowUpRight}
            </a>
          </div>
          <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="card-external" onclick="event.stopPropagation()" title="${t('visitSite')}">
            ${icons.externalLink}
          </a>
        </div>
        <p class="card-description">${project.description}</p>
        <div class="tech-pills">
          ${project.tech.map(tc => `<span class="tech-pill ${tc.type}">${tc.label}</span>`).join('')}
        </div>
      </div>
    `;

    grid.appendChild(card);

    // Initialize iframe preview
    const previewEl = card.querySelector('[data-preview]');
    previewInstances.push(createSitePreview(project, previewEl));

    // Click to open detail modal
    card.addEventListener('click', () => openModal(project));
  });

  // Re-observe for scroll reveal
  initScrollReveal();
}

/* ═══════════════════════════════════════════
   Detail Modal
   ═══════════════════════════════════════════ */
let modalPreviewInstance = null;

function openModal(project) {
  const overlay = document.getElementById('detail-modal');
  const preview = document.getElementById('modal-preview');
  const info = document.getElementById('modal-info');

  // Render info
  info.innerHTML = `
    <div class="modal-project-name">${project.name}</div>
    <p class="modal-description">${project.description}</p>
    <div class="modal-tech-pills">
      ${project.tech.map(t => `<span class="tech-pill ${t.type}">${t.label}</span>`).join('')}
    </div>
    <div class="modal-actions">
      <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="modal-btn">
        ${icons.externalLink}
        ${t('visitSite')}
      </a>
    </div>
  `;

  // Render live preview
  preview.innerHTML = '';
  preview.style.height = '';
  modalPreviewInstance = createSitePreview(project, preview, { scrollable: true });

  // Show modal
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('detail-modal');
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  if (modalPreviewInstance) {
    modalPreviewInstance.destroy();
    modalPreviewInstance = null;
  }

  // Clean up iframe after transition
  setTimeout(() => {
    document.getElementById('modal-preview').innerHTML = '';
    document.getElementById('modal-info').innerHTML = '';
  }, 400);
}

/* ═══════════════════════════════════════════
   Letter Scramble Animation (brute-force decode)
   ═══════════════════════════════════════════ */
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?<>{}[]';

function scrambleText(element) {
  // Get only the direct text content (not nested spans)
  const children = Array.from(element.childNodes);
  const parts = [];

  children.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      parts.push({ type: 'text', value: node.textContent, node });
    } else if (node.nodeType === Node.ELEMENT_NODE && node.hasAttribute('data-scramble')) {
      parts.push({ type: 'element', value: node.textContent, node, tag: node.outerHTML.match(/^<[^>]+>/)[0], tagClose: `</${node.tagName.toLowerCase()}>` });
    } else {
      parts.push({ type: 'passthrough', node });
    }
  });

  // Build flat char array with metadata
  const chars = [];
  parts.forEach((part) => {
    if (part.type === 'text' || part.type === 'element') {
      for (let i = 0; i < part.value.length; i++) {
        chars.push({
          target: part.value[i],
          part,
          resolved: part.value[i] === ' ', // spaces resolve instantly
        });
      }
    }
  });

  const totalChars = chars.length;
  let resolvedCount = chars.filter((c) => c.resolved).length;

  // Hide element initially, then show with scrambled text
  element.style.visibility = 'visible';

  const SCRAMBLE_SPEED = 30;     // ms between frames
  const RESOLVE_EVERY = 3;       // resolve a char every N frames
  let frame = 0;

  function buildHTML() {
    let html = '';
    let charIdx = 0;

    parts.forEach((part) => {
      if (part.type === 'passthrough') {
        html += part.node.outerHTML || part.node.textContent;
        return;
      }

      let segmentHTML = '';
      for (let i = 0; i < part.value.length; i++) {
        const c = chars[charIdx];
        if (c.resolved) {
          segmentHTML += c.target;
        } else {
          segmentHTML += `<span class="scramble-char">${SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]}</span>`;
        }
        charIdx++;
      }

      if (part.type === 'element') {
        html += part.tag + segmentHTML + part.tagClose;
      } else {
        html += segmentHTML;
      }
    });

    return html;
  }

  function tick() {
    frame++;

    // Resolve next unresolved char every few frames
    if (frame % RESOLVE_EVERY === 0 && resolvedCount < totalChars) {
      // Find next unresolved char (left to right)
      for (let i = 0; i < chars.length; i++) {
        if (!chars[i].resolved) {
          chars[i].resolved = true;
          resolvedCount++;
          break;
        }
      }
    }

    element.innerHTML = buildHTML();

    if (resolvedCount < totalChars) {
      requestAnimationFrame(tick);
    }
  }

  // Start after a small delay for dramatic effect
  setTimeout(() => {
    requestAnimationFrame(tick);
  }, 300);
}

function initScrambleAnimation() {
  const heroName = document.querySelector('h1.hero-name[data-scramble]');
  if (heroName) {
    heroName.style.visibility = 'hidden';
    // Start scramble once the hero fade-in animation is partway through
    setTimeout(() => scrambleText(heroName), 400);
  }
}

/* ═══════════════════════════════════════════
   Typing Animation
   ═══════════════════════════════════════════ */
function initTypingAnimation() {
  const el = document.getElementById('typed-text');
  const phrases = ['hello world', 'cat portfolio.json', 'npm run build', 'deploy --prod'];
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex >= current.length) {
        setTimeout(() => { deleting = true; tick(); }, 2200);
        return;
      }
      setTimeout(tick, 60 + Math.random() * 40);
    } else {
      el.textContent = current.slice(0, charIndex);
      charIndex--;

      if (charIndex < 0) {
        deleting = false;
        charIndex = 0;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, 500);
        return;
      }
      setTimeout(tick, 30);
    }
  }

  setTimeout(tick, 800);
}

/* ═══════════════════════════════════════════
   Scroll Reveal (IntersectionObserver)
   ═══════════════════════════════════════════ */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal, .project-card').forEach((el) => {
    observer.observe(el);
  });
}

/* ═══════════════════════════════════════════
   Initialize
   ═══════════════════════════════════════════ */
function init() {
  // Set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Apply initial translations
  applyTranslations();

  // Render projects
  renderProjects();

  // Scramble animation on hero name
  initScrambleAnimation();

  // Typing animation
  initTypingAnimation();

  // Scroll reveals
  initScrollReveal();

  // Modal close handlers
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('detail-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Language toggle
  document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    localStorage.setItem('portfolio-lang', currentLang);
    applyTranslations();
    renderProjects();
  });
}

// Wait for DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
