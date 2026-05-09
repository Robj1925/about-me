// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== EMAIL OBFUSCATION =====
// Assembled at runtime to prevent scraper harvesting from source
(function () {
  const u = 'robbyj1925';
  const d = 'icloud.com';
  const links = document.querySelectorAll('[data-email]');
  links.forEach(el => {
    const addr = u + '@' + d;
    if (el.tagName === 'A') {
      el.href = 'mailto:' + addr;
      el.textContent = addr;
    } else {
      el.textContent = addr;
    }
  });
})();

// ===== TERMINAL TYPEWRITER =====
const lines = [
  { type: 'prompt', text: '~/projects $ ' },
  { type: 'cmd',    text: 'claw run ai-audit --client acme-corp' },
  { type: 'output', text: '⚡ Loading skill: ai-audit...' },
  { type: 'output', text: '🔍 Scanning codebase for AI opportunities...' },
  { type: 'success', text: '✓ Found 14 automation candidates' },
  { type: 'success', text: '✓ Report saved → /output/audit-acme.md' },
  { type: 'prompt', text: '~/projects $ ' },
  { type: 'cmd',    text: 'claw skill mcp-server --deploy youtube' },
  { type: 'output', text: '🚀 Deploying MCP server...' },
  { type: 'success', text: '✓ YouTube MCP online at localhost:3000' },
  { type: 'cursor', text: '' },
];

const terminalBody = document.getElementById('terminal-body');

async function typeTerminal() {
  if (!terminalBody) return;
  let html = '';
  for (const line of lines) {
    if (line.type === 'cursor') {
      html += `<span class="t-prompt">~/projects $ </span><span class="t-cursor"></span>`;
      break;
    }
    const cls = line.type === 'prompt' ? 't-prompt'
               : line.type === 'cmd'    ? 't-cmd'
               : line.type === 'success' ? 't-success'
               : 't-output';
    html += `<div><span class="${cls}">${line.text}</span></div>`;
    terminalBody.innerHTML = html + `<span class="t-cursor"></span>`;
    await new Promise(r => setTimeout(r, line.type === 'prompt' ? 300 : 80 + Math.random() * 120));
  }
  terminalBody.innerHTML = html;
}

// Start after a short delay
setTimeout(typeTerminal, 800);

// ===== NAV SCROLL SHADOW =====
const navEl = document.querySelector('nav');
window.addEventListener('scroll', () => {
  navEl.style.boxShadow = window.scrollY > 20 ? '0 4px 32px rgba(0,0,0,0.4)' : '';
}, { passive: true });
