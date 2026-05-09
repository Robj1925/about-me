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
// ===== EMAIL OBFUSCATION =====
// The email is injected securely during the GitHub Actions build step
(function () {
  const email = '___CONTACT_EMAIL___';
  
  if (email && email !== '___CONTACT_EMAIL___') {
    const links = document.querySelectorAll('[data-email]');
    links.forEach(el => {
      if (el.tagName === 'A') {
        el.href = 'mailto:' + email;
        el.textContent = email;
      } else {
        el.textContent = email;
      }
    });
  }
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

// ===== DYNAMIC BLOG CARDS =====
(async function loadBlogPosts() {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;

  try {
    const res = await fetch('blog/posts.json');
    if (!res.ok) throw new Error('posts.json not found');
    const posts = await res.json();

    if (!posts || posts.length === 0) {
      grid.innerHTML = '<p style="color:var(--text-muted);text-align:center">No posts yet.</p>';
      return;
    }

    // Show 3 most recent (already sorted newest first by build script)
    const latest = posts.slice(0, 3);

    grid.innerHTML = latest.map(p => {
      const tags = (p.tags || []).map(t => `<span class="blog-tag">${t}</span>`).join('');
      const thumb = p.thumbnail
        ? `<img src="${p.thumbnail}" alt="${p.title} thumbnail" class="blog-thumb" loading="lazy" />`
        : '';
      const date = new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
      return `
        <a href="blog/${p.slug}.html" class="blog-card blog-card-link" aria-label="Read: ${p.title}">
          ${thumb}
          <div class="blog-body">
            <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">${tags}</div>
            <h3 class="blog-title">${p.title}</h3>
            <p class="blog-excerpt">${p.excerpt}</p>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:auto;padding-top:12px">
              <span class="blog-date">${date}</span>
              <span style="font-size:0.85rem;color:var(--accent-cyan);font-weight:500">Read article →</span>
            </div>
          </div>
        </a>`;
    }).join('');

  } catch (err) {
    // Graceful fallback — hide the loading state silently
    grid.innerHTML = '';
    console.warn('Blog posts could not be loaded:', err.message);
  }
})();
