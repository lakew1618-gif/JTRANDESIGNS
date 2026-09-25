// --- 1. LANGUAGE SELECTOR SETUP ---
const langBtn = document.getElementById('langBtn');
let lang = localStorage.getItem('jtran-lang') || 'en';

function applyLang() {
  document.documentElement.lang = lang === 'am' ? 'am' : 'en';
  langBtn.textContent = lang === 'en' ? 'አማ' : 'EN';
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.dataset[lang] || el.dataset.en;
  });
}

langBtn.addEventListener('click', () => {
  lang = lang === 'en' ? 'am' : 'en';
  localStorage.setItem('jtran-lang', lang);
  applyLang();
});

// Initialization of languages on boot
applyLang();

// --- 2. CONTACT EMAIL REQUEST FORM INTERACTION ---
const form = document.getElementById('requestForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const service = document.getElementById('service').value;
  const details = document.getElementById('details').value.trim();
  
  const subject = encodeURIComponent(`JTRAN Design Request — ${service}`);
  const body = encodeURIComponent(`Name: ${name}\nService: ${service}\n\nProject details:\n${details}`);
  
  window.location.href = `mailto:lakew1618@://gmail.com{subject}&body=${body}`;
  note.textContent = lang === 'am' ? 'የኢሜይል ጥያቄዎ ተዘጋጅቷል።' : 'Your email request is ready to send.';
});

// --- 3. PROGRESSIVE WEB APP (PWA) SERVICE WORKER REGISTER ---
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('PWA Service Worker registered successfully scope:', reg.scope))
      .catch(err => console.error('PWA Service Worker registration failed:', err));
  });
}
