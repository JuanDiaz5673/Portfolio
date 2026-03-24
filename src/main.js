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
    demoAccess: "Demo Access",
    demoUser: "User:",
    demoPass: "Pass:",
    scrollText: "scroll",
    availableForWork: "Available for work",
    downloadResume: "Resume",
    aboutLabel: "About",
    aboutTitle: "Who I Am",
    aboutBio: "Cybersecurity student and IT professional based in New York, currently pursuing a B.S. in Cybersecurity & Information Assurance at Western Governors University. Ranked in the top 4% nationally in the National Cyber League CTF, with certifications in CompTIA A+, ITIL 4, and Linux. On the side, I build full-stack websites for local businesses — deploying them on my own home server infrastructure using Cloudflare tunnels, which doubles as my personal lab for networking and security.",
    educationValue: "B.S. Cybersecurity",
    educationSub: "WGU — Expected 2026",
    ctfValue: "Top 4%",
    ctfSub: "National Cyber League",
    locationSub: "Based in NYC",
    certsHeading: "Certifications",
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
    demoAccess: "Acceso Demo",
    demoUser: "Usuario:",
    demoPass: "Clave:",
    scrollText: "desplazar",
    availableForWork: "Disponible para trabajar",
    downloadResume: "Curriculum",
    aboutLabel: "Sobre Mi",
    aboutTitle: "Quien Soy",
    aboutBio: "Estudiante de ciberseguridad y profesional de TI en Nueva York, cursando una licenciatura en Ciberseguridad y Aseguramiento de la Informacion en Western Governors University. Clasificado en el top 4% nacional en el CTF de la National Cyber League, con certificaciones en CompTIA A+, ITIL 4 y Linux. Como hobby, construyo sitios web full-stack para negocios locales — desplegandolos en mi propia infraestructura de servidores caseros usando tuneles Cloudflare, que tambien sirve como mi laboratorio personal de redes y seguridad.",
    educationValue: "Lic. Ciberseguridad",
    educationSub: "WGU — Esperado 2026",
    ctfValue: "Top 4%",
    ctfSub: "National Cyber League",
    locationSub: "Basado en NYC",
    certsHeading: "Certificaciones",
  },
};

const projectDescriptions = {
  en: {
    yupidecoracion: "Full-stack inventory management system for a balloon decoration business with role-based access and OCR scanning.",
    alexasfashion: "Bilingual fashion brand website for a New York clothing store with animated promotions and catalog downloads.",
    polloinka: "Bilingual restaurant website for a Peruvian rotisserie chain in Queens with a full interactive menu system.",
    sebaseba: "Bilingual website for a Colombian bakery & restaurant in Queens celebrating 35+ years of traditional recipes.",
    dreasneedleworks: "Elegant portfolio website for a handcraft artisan specializing in custom embroidery and personalized bows.",
  },
  es: {
    yupidecoracion: "Sistema de inventario full-stack para un negocio de decoraciones con globos con acceso por roles y escaneo OCR.",
    alexasfashion: "Sitio web bilingue de moda para una tienda de ropa en Nueva York con promociones animadas y descarga de catalogos.",
    polloinka: "Sitio web bilingue de restaurante para una cadena de pollerias peruanas en Queens con menu interactivo completo.",
    sebaseba: "Sitio web bilingue para una panaderia y restaurante colombiano en Queens celebrando 35+ anos de recetas tradicionales.",
    dreasneedleworks: "Sitio web elegante para una artesana de manualidades especializada en bordado personalizado y lazos artesanales.",
  },
};

const projectDetails = {
  en: {
    yupidecoracion: {
      summary: "Built a full-stack inventory management system from scratch for my mother's balloon decoration business, running on a home server behind a Cloudflare tunnel.",
      highlights: [
        "Custom auth with HMAC-SHA256 tokens and role-based access (owner vs. read-only demo)",
        "Tesseract.js OCR integration for scanning product labels",
        "Smart color search that understands Spanish synonyms (e.g. 'rojo' finds all red variants)",
        "SQLite database tracking balloons by color, shape, size, material, and finish",
        "Security hardening with rate limiting, Helmet headers, and CORS restrictions",
      ],
    },
    alexasfashion: {
      summary: "Designed a promotional website for a women's fashion boutique in New York — built with zero frameworks to keep it lightweight and fast.",
      highlights: [
        "Bilingual interface with full English/Spanish toggle",
        "Animated promo bar with CSS shimmer effects and scroll-triggered animations",
        "Integrated PDF catalog downloads for customers",
        "Puppeteer backend for automated product page screenshot generation",
        "Elegant typography pairing Bebas Neue, Playfair Display, and Cormorant Garamond",
      ],
    },
    polloinka: {
      summary: "Created a fully bilingual website for an authentic Peruvian rotisserie restaurant with three Queens, NY locations.",
      highlights: [
        "Custom i18n system with 100+ translation keys covering the entire site",
        "Interactive menu across 6 categories with authentic Peruvian dish descriptions",
        "Smooth scroll navigation with active link highlighting",
        "Mobile-responsive hamburger menu and contact form with validation",
        "Express.js server with SPA fallback routing",
      ],
    },
    sebaseba: {
      summary: "Developed a bilingual website for a beloved Colombian bakery and restaurant serving Jackson Heights and Corona since 1987.",
      highlights: [
        "Dual navigation system — top nav plus sticky bottom bar for mobile with synced active states",
        "Extensive menu covering 7 categories of authentic Colombian cuisine",
        "CSS grain texture overlay on hero for a rustic, warm aesthetic",
        "Full English/Spanish i18n across all content",
        "Contact form with success feedback animation",
      ],
    },
    dreasneedleworks: {
      summary: "Crafted an elegant single-page portfolio for a handcraft artisan specializing in custom embroidery and personalized bows.",
      highlights: [
        "Refined blush, taupe, and cream palette with linen texture via CSS gradients",
        "Typography pairing Cormorant Garamond with Jost for artisanal feel",
        "hCaptcha integration on contact form for spam protection",
        "Backdrop blur navigation with scroll-based active link highlighting",
        "Fully responsive with professional product photography gallery",
      ],
    },
  },
  es: {
    yupidecoracion: {
      summary: "Construi un sistema de inventario full-stack desde cero para el negocio de decoraciones con globos de mi madre, corriendo en un servidor casero detras de un tunel Cloudflare.",
      highlights: [
        "Autenticacion personalizada con tokens HMAC-SHA256 y acceso por roles (duena vs. demo solo lectura)",
        "Integracion de OCR con Tesseract.js para escanear etiquetas de productos",
        "Busqueda inteligente por color que entiende sinonimos en espanol (ej. 'rojo' encuentra todas las variantes rojas)",
        "Base de datos SQLite rastreando globos por color, forma, tamano, material y acabado",
        "Seguridad con limitacion de intentos, cabeceras Helmet y restricciones CORS",
      ],
    },
    alexasfashion: {
      summary: "Disene un sitio web promocional para una boutique de moda femenina en Nueva York — construido sin frameworks para mantenerlo liviano y rapido.",
      highlights: [
        "Interfaz bilingue con alternancia completa ingles/espanol",
        "Barra promocional animada con efectos shimmer CSS y animaciones por scroll",
        "Descargas integradas de catalogos PDF para clientes",
        "Backend con Puppeteer para generacion automatizada de capturas de productos",
        "Tipografia elegante combinando Bebas Neue, Playfair Display y Cormorant Garamond",
      ],
    },
    polloinka: {
      summary: "Cree un sitio web completamente bilingue para un restaurante autentico de pollo a la brasa peruano con tres ubicaciones en Queens, NY.",
      highlights: [
        "Sistema i18n personalizado con mas de 100 claves de traduccion",
        "Menu interactivo en 6 categorias con descripciones autenticas peruanas",
        "Navegacion suave con resaltado de enlaces activos",
        "Menu hamburguesa responsive y formulario de contacto con validacion",
        "Servidor Express.js con enrutamiento SPA",
      ],
    },
    sebaseba: {
      summary: "Desarrolle un sitio web bilingue para una querida panaderia y restaurante colombiano sirviendo a Jackson Heights y Corona desde 1987.",
      highlights: [
        "Sistema de doble navegacion — barra superior mas barra inferior fija para movil con estados activos sincronizados",
        "Menu extenso cubriendo 7 categorias de cocina colombiana autentica",
        "Textura de grano CSS sobre el hero para una estetica rustica y calida",
        "i18n completo en ingles/espanol en todo el contenido",
        "Formulario de contacto con animacion de confirmacion",
      ],
    },
    dreasneedleworks: {
      summary: "Elabore un elegante portafolio de una pagina para una artesana especializada en bordado personalizado y lazos artesanales.",
      highlights: [
        "Paleta refinada de rubor, topo y crema con textura de lino via gradientes CSS",
        "Tipografia combinando Cormorant Garamond con Jost para un estilo artesanal",
        "Integracion de hCaptcha en formulario de contacto contra spam",
        "Navegacion con desenfoque y resaltado de enlaces activos por scroll",
        "Totalmente responsive con galeria profesional de fotografia de productos",
      ],
    },
  },
};

function t(key) {
  return i18n[currentLang][key] || i18n.en[key] || key;
}

function getLocalized(source, slug) {
  return source[currentLang][slug] || source.en[slug];
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
    domain: "yupidecoraciones.com",
    url: "https://yupidecoraciones.com",
    get description() { return getLocalized(projectDescriptions, 'yupidecoracion'); },
    demo: { username: "Portfolio", password: "1234" },
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
    domain: "promocion.alexasfashionnewyork.com",
    url: "https://promocion.alexasfashionnewyork.com",
    get description() { return getLocalized(projectDescriptions, 'alexasfashion'); },
    tech: [
      { label: "Node.js", type: "technology" },
      { label: "Puppeteer", type: "technology" },
      { label: "JavaScript", type: "language" },
    ],
  },
  {
    name: "Pollo Inka",
    slug: "polloinka",
    domain: "polloinka.pages.dev",
    url: "https://polloinka.pages.dev",
    get description() { return getLocalized(projectDescriptions, 'polloinka'); },
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
    domain: "sebaseba.pages.dev",
    url: "https://sebaseba.pages.dev",
    get description() { return getLocalized(projectDescriptions, 'sebaseba'); },
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
    domain: "dreasneedleworks.com",
    url: "https://dreasneedleworks.com",
    get description() { return getLocalized(projectDescriptions, 'dreasneedleworks'); },
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
   Shared HTML Helpers
   ═══════════════════════════════════════════ */
function renderDemoHtml(project) {
  if (!project.demo) return '';
  return `
    <div class="card-demo">
      <span class="demo-label">${t('demoAccess')}</span>
      <div class="demo-creds">
        <span class="demo-cred"><span class="demo-key">${t('demoUser')}</span> ${project.demo.username}</span>
        <span class="demo-cred"><span class="demo-key">${t('demoPass')}</span> ${project.demo.password}</span>
      </div>
    </div>
  `;
}

function renderTechPills(project) {
  return project.tech.map(tc => `<span class="tech-pill ${tc.type}">${tc.label}</span>`).join('');
}

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
      // For card previews, scale iframe height to fill the container
      const isInCard = container.closest('.project-card');
      const canFillContainer = state.containerHeight && state.scale && (scrollable || isInCard);
      const iframeHeight = canFillContainer
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
  }

  // Event delegation — bind once, never re-bind on render
  container.addEventListener('click', (e) => {
    const actionEl = e.target.closest('[data-action]');
    if (!actionEl) return;
    e.stopPropagation();
    const action = actionEl.dataset.action;
    if (action === 'toggle') state.useFallback = !state.useFallback;
    else if (action === 'start-interact') state.interacting = true;
    else if (action === 'stop-interact') state.interacting = false;
    render();
  });

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
        // In card layout, don't override height — CSS handles it
        if (!container.closest('.project-card')) {
          const scaledHeight = newIsMobile ? 200 : Math.min(Math.round(IFRAME_H * newScale), maxHeight);
          container.style.height = scaledHeight + 'px';
        }
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
    card.style.transitionDelay = `${index * 120}ms`;
    card.setAttribute('data-index', String(index + 1).padStart(2, '0'));

    const indexNum = String(index + 1).padStart(2, '0');

    card.innerHTML = `
      <div class="site-preview" data-preview></div>
      <div class="card-body">
        <div class="card-header">
          <div>
            <div class="card-name">${project.name}</div>
            <a href="https://${project.domain}" target="_blank" rel="noopener noreferrer" class="card-domain" onclick="event.stopPropagation()">
              ${project.domain}
              ${icons.arrowUpRight}
            </a>
          </div>
          <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="card-external" onclick="event.stopPropagation()" title="${t('visitSite')}">
            ${icons.externalLink}
          </a>
        </div>
        <p class="card-description">${project.description}</p>
        ${renderDemoHtml(project)}
        <div class="tech-pills">
          ${renderTechPills(project)}
        </div>
      </div>
      <div class="card-footer">
        <span class="card-index">${indexNum}</span>
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
let modalScrollHandler = null;
let modalGeneration = 0;

function openModal(project) {
  const overlay = document.getElementById('detail-modal');
  const preview = document.getElementById('modal-preview');
  const info = document.getElementById('modal-info');

  // Render info
  const detailedDesc = getLocalized(projectDetails, project.slug);
  info.innerHTML = `
    <div class="modal-header-row">
      <div>
        <div class="modal-project-name">${project.name}</div>
        <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="modal-domain">${project.domain} ${icons.arrowUpRight}</a>
      </div>
      <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="modal-btn">
        ${icons.externalLink}
        ${t('visitSite')}
      </a>
    </div>
    <div class="modal-tech-pills">
      ${renderTechPills(project)}
    </div>
    ${renderDemoHtml(project)}
    <div class="modal-detailed">
      <p class="modal-detailed-summary">${detailedDesc.summary}</p>
      <ul class="modal-highlights">
        ${detailedDesc.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
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

  // Scroll hint arrow — hide when user scrolls near bottom
  const content = overlay.querySelector('.modal-content');
  const hint = document.getElementById('modal-scroll-hint');
  if (hint) hint.classList.remove('hidden');
  const onScroll = () => {
    if (content.scrollTop + content.clientHeight >= content.scrollHeight - 40) {
      hint.classList.add('hidden');
    } else {
      hint.classList.remove('hidden');
    }
  };
  modalScrollHandler = onScroll;
  content.addEventListener('scroll', modalScrollHandler);
}

function closeModal() {
  const overlay = document.getElementById('detail-modal');
  const content = overlay.querySelector('.modal-content');
  if (modalScrollHandler) {
    content.removeEventListener('scroll', modalScrollHandler);
    modalScrollHandler = null;
  }
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  if (modalPreviewInstance) {
    modalPreviewInstance.destroy();
    modalPreviewInstance = null;
  }

  // Clean up iframe after CSS transition; guard against reopening during delay
  const gen = ++modalGeneration;
  setTimeout(() => {
    if (modalGeneration !== gen) return; // Modal was reopened — skip cleanup
    document.getElementById('modal-preview').innerHTML = '';
    document.getElementById('modal-info').innerHTML = '';
  }, 400);
}

/* ═══════════════════════════════════════════
   Letter Scramble Animation (brute-force decode)
   ═══════════════════════════════════════════ */
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?<>{}[]~^|/\\';

// Track active scramble animations so we can cancel them
let activeScrambles = [];

function scrambleText(element, { resolveInterval = 8, shuffleSpeed = 50, onDone = null } = {}) {
  // Parse child nodes to preserve nested elements like <span class="accent-text">
  const children = Array.from(element.childNodes);
  const parts = [];

  children.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      parts.push({ type: 'text', value: node.textContent });
    } else if (node.nodeType === Node.ELEMENT_NODE && node.hasAttribute('data-scramble')) {
      const openTag = node.outerHTML.match(/^<[^>]+>/)[0];
      parts.push({ type: 'element', value: node.textContent, tag: openTag, tagClose: `</${node.tagName.toLowerCase()}>` });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      parts.push({ type: 'passthrough', html: node.outerHTML });
    }
  });

  // Build flat char array
  const chars = [];
  parts.forEach((part) => {
    if (part.type === 'text' || part.type === 'element') {
      for (let i = 0; i < part.value.length; i++) {
        chars.push({
          target: part.value[i],
          part,
          resolved: part.value[i] === ' ',
        });
      }
    }
  });

  const totalChars = chars.length;
  let resolvedCount = chars.filter((c) => c.resolved).length;
  let cancelled = false;

  element.style.visibility = 'visible';

  let frame = 0;

  function buildHTML() {
    let html = '';
    let charIdx = 0;

    parts.forEach((part) => {
      if (part.type === 'passthrough') {
        html += part.html;
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

  let lastTime = 0;

  function tick(timestamp) {
    if (cancelled) return;

    // Throttle to shuffleSpeed ms between frames
    if (timestamp - lastTime < shuffleSpeed) {
      requestAnimationFrame(tick);
      return;
    }
    lastTime = timestamp;
    frame++;

    // Resolve one character every resolveInterval frames
    if (frame % resolveInterval === 0 && resolvedCount < totalChars) {
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
    } else if (onDone) {
      onDone();
    }
  }

  requestAnimationFrame(tick);

  return { cancel: () => { cancelled = true; } };
}

function scrambleSimpleText(element, text, options = {}) {
  // For simple elements with just text content (no nested children to preserve)
  element.textContent = text;

  // Re-parse as simple text nodes
  const chars = [];
  for (let i = 0; i < text.length; i++) {
    chars.push({
      target: text[i],
      resolved: text[i] === ' ',
    });
  }

  const totalChars = chars.length;
  let resolvedCount = chars.filter((c) => c.resolved).length;
  let cancelled = false;

  element.style.visibility = 'visible';

  const resolveInterval = options.resolveInterval || 6;
  const shuffleSpeed = options.shuffleSpeed || 50;
  let frame = 0;
  let lastTime = 0;

  function buildHTML() {
    let html = '';
    for (let i = 0; i < chars.length; i++) {
      const c = chars[i];
      if (c.resolved) {
        html += c.target;
      } else {
        html += `<span class="scramble-char">${SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]}</span>`;
      }
    }
    return html;
  }

  function tick(timestamp) {
    if (cancelled) return;

    if (timestamp - lastTime < shuffleSpeed) {
      requestAnimationFrame(tick);
      return;
    }
    lastTime = timestamp;
    frame++;

    if (frame % resolveInterval === 0 && resolvedCount < totalChars) {
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

  requestAnimationFrame(tick);

  return { cancel: () => { cancelled = true; } };
}

function runHeroScramble() {
  // Cancel any running scrambles
  activeScrambles.forEach((s) => s.cancel());
  activeScrambles = [];

  const heroName = document.querySelector('h1.hero-name[data-scramble]');
  const heroTitle = document.querySelector('[data-scramble-title]');

  if (heroName) {
    // Restore the original HTML structure before scrambling
    heroName.innerHTML = `Juan <span class="accent-text" data-scramble>Diaz</span>`;
    heroName.style.visibility = 'hidden';

    // Name scramble: slow — resolve every 8 frames, 50ms per shuffle frame
    setTimeout(() => {
      const s = scrambleText(heroName, {
        resolveInterval: 8,
        shuffleSpeed: 50,
      });
      activeScrambles.push(s);
    }, 400);
  }

  if (heroTitle) {
    const titleText = t('heroTitle');
    heroTitle.textContent = titleText;
    heroTitle.style.visibility = 'hidden';

    // Title scramble: starts after a delay, slightly faster resolve since it's longer text
    setTimeout(() => {
      const s = scrambleSimpleText(heroTitle, titleText, {
        resolveInterval: 5,
        shuffleSpeed: 45,
      });
      activeScrambles.push(s);
    }, 900);
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
let scrollRevealObserver = null;

function initScrollReveal() {
  // Disconnect previous observer to prevent accumulation on re-renders
  if (scrollRevealObserver) scrollRevealObserver.disconnect();

  scrollRevealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          scrollRevealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal, .project-card').forEach((el) => {
    scrollRevealObserver.observe(el);
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

  // Scramble animation on hero name + title
  runHeroScramble();

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

  // Particle background
  initParticles();

  // Cursor orb
  initCursorOrb();

  // Side nav
  initSideNav();

  // Language toggle
  document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    localStorage.setItem('portfolio-lang', currentLang);
    applyTranslations();
    renderProjects();
    // Re-trigger scramble on language switch
    runHeroScramble();
  });
}

/* ═══════════════════════════════════════════
   Particle Constellation Background
   ═══════════════════════════════════════════ */
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height, particles;
  const PARTICLE_COUNT = 60;
  const CONNECTION_DIST = 150;
  const CONNECTION_DIST_SQ = CONNECTION_DIST * CONNECTION_DIST;
  const MOUSE_DIST = 200;
  const MOUSE_DIST_SQ = MOUSE_DIST * MOUSE_DIST;
  let mouse = { x: -9999, y: -9999 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distSq = dx * dx + dy * dy;

        if (distSq < CONNECTION_DIST_SQ) {
          const dist = Math.sqrt(distSq);
          const alpha = (1 - dist / CONNECTION_DIST) * 0.08;
          ctx.strokeStyle = `rgba(212, 168, 83, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }

      // Mouse connection
      const mdx = particles[i].x - mouse.x;
      const mdy = particles[i].y - mouse.y;
      const mDistSq = mdx * mdx + mdy * mdy;
      if (mDistSq < MOUSE_DIST_SQ) {
        const mDist = Math.sqrt(mDistSq);
        const alpha = (1 - mDist / MOUSE_DIST) * 0.15;
        ctx.strokeStyle = `rgba(212, 168, 83, ${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }

    // Draw particles
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 168, 83, ${p.opacity})`;
      ctx.fill();
    }
  }

  function update() {
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;
    }
  }

  let running = true;

  function animate() {
    if (!running) return;
    update();
    draw();
    requestAnimationFrame(animate);
  }

  // Pause when tab is hidden to save resources
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      running = false;
    } else {
      running = true;
      requestAnimationFrame(animate);
    }
  });

  resize();
  createParticles();
  animate();

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });

  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  document.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });
}

/* ═══════════════════════════════════════════
   Cursor Orb (hero section)
   ═══════════════════════════════════════════ */
function initCursorOrb() {
  const orb = document.getElementById('cursor-orb');
  const hero = document.getElementById('hero');
  if (!orb || !hero) return;

  let orbX = 0, orbY = 0;
  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let isInHero = true;
  let heroRect = hero.getBoundingClientRect();

  // Recalculate hero bounds only on scroll/resize, not every mousemove
  const updateHeroRect = () => { heroRect = hero.getBoundingClientRect(); };
  window.addEventListener('scroll', updateHeroRect, { passive: true });
  window.addEventListener('resize', updateHeroRect);

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isInHero = e.clientY >= heroRect.top && e.clientY <= heroRect.bottom;
  });

  function animate() {
    orbX += (mouseX - orbX) * 0.08;
    orbY += (mouseY - orbY) * 0.08;
    orb.style.transform = `translate(${orbX - 200}px, ${orbY - 200}px)`;
    orb.style.opacity = isInHero ? '1' : '0';
    requestAnimationFrame(animate);
  }
  animate();
}

/* ═══════════════════════════════════════════
   Side Navigation Active State
   ═══════════════════════════════════════════ */
function initSideNav() {
  const dots = document.querySelectorAll('.side-nav-dot');
  const sections = ['hero', 'about', 'projects', 'contact'];

  // Use scroll position to determine active section — more reliable than
  // IntersectionObserver for tall sections like projects
  function updateActiveSection() {
    const scrollY = window.scrollY + window.innerHeight / 3;
    let activeId = sections[0];

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        activeId = id;
      }
    }

    dots.forEach((d) => {
      d.classList.toggle('active', d.dataset.section === activeId);
    });
  }

  window.addEventListener('scroll', updateActiveSection, { passive: true });
  updateActiveSection();
}

// Wait for DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
