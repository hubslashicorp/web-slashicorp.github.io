(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  // Mobile menu
  const toggle = $('.nav-toggle');
  const links = $('.nav-links');
  toggle?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Reveal on scroll
  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }), { threshold: 0.12 })
    : null;
  $$('.reveal').forEach((el) => (io ? io.observe(el) : el.classList.add('in')));

  // Terminal typing (home)
  const term = $('#term');
  if (term) {
    const lines = [
      ['p', '$ terraform apply -auto-approve'],
      ['ok', '✔ Infra provisionada em 42s'],
      ['p', '$ git push origin main'],
      ['ok', '✔ Pipeline CI/CD executado'],
      ['p', '$ kubectl rollout status deploy/app'],
      ['ok', '✔ Deploy concluído, zero downtime'],
    ];
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const caret = '<span class="caret"></span>';
    let out = '';
    const render = (extra = '') => { term.innerHTML = out + extra + caret; };
    (async () => {
      for (const [cls, text] of lines) {
        if (cls === 'p' && !reduce) {
          let t = '';
          for (const ch of text) { t += ch; render(`<span class="${cls}">${t}</span>`); await new Promise((r) => setTimeout(r, 28)); }
        }
        out += `<div class="${cls}">${text}</div>`;
        render();
        if (!reduce) await new Promise((r) => setTimeout(r, cls === 'p' ? 350 : 700));
      }
    })();
  }

  // Especialidades: tools grid + modal
  const grid = $('#tools');
  if (grid) {
    const dlg = $('#tool-dialog');
    const search = $('#search');
    const empty = $('#empty');
    const catsEl = $('#cats');
    let cat = 'Todas';
    fetch('/data/tools.json')
      .then((r) => r.json())
      .then((tools) => {
        grid.innerHTML = '';
        tools.forEach((t) => {
          const b = document.createElement('button');
          b.className = 'tool';
          b.type = 'button';
          b.textContent = t.name;
          b.dataset.cat = t.cat;
          b.addEventListener('click', () => {
            $('h3', dlg).textContent = t.name;
            $('.desc', dlg).textContent = t.text;
            const w = $('.web', dlg), k = $('.wiki', dlg);
            w.hidden = !t.web; w.href = t.web || '#';
            k.hidden = !t.wiki; k.href = t.wiki || '#';
            dlg.showModal();
          });
          grid.append(b);
        });
        const filter = () => {
          const q = search.value.trim().toLowerCase();
          let n = 0;
          $$('.tool', grid).forEach((b) => {
            const show = b.textContent.toLowerCase().includes(q) && (cat === 'Todas' || b.dataset.cat === cat);
            b.hidden = !show; n += show;
          });
          empty.style.display = n ? 'none' : 'block';
        };
        ['Todas', ...new Set(tools.map((t) => t.cat))].forEach((name) => {
          const c = document.createElement('button');
          c.type = 'button'; c.className = 'chip'; c.textContent = name;
          c.setAttribute('aria-pressed', name === cat);
          c.addEventListener('click', () => {
            cat = name;
            $$('button', catsEl).forEach((x) => x.setAttribute('aria-pressed', x === c));
            filter();
          });
          catsEl.append(c);
        });
        search.addEventListener('input', filter);
        const hash = decodeURIComponent(location.hash.slice(1)).toLowerCase();
        if (hash) { search.value = hash; filter(); }
      })
      .catch(() => { grid.innerHTML = '<p>Não foi possível carregar a lista.</p>'; });
    dlg.addEventListener('click', (e) => { if (e.target === dlg || e.target.closest('.close')) dlg.close(); });
  }

  // Contact form (Formspree)
  const form = $('#contact-form');
  if (form) {
    const status = $('.form-status', form);
    const btn = $('button[type=submit]', form);
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (form.website.value) return; // honeypot
      btn.disabled = true;
      status.className = 'form-status';
      status.textContent = 'Enviando…';
      try {
        const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        if (!res.ok) throw new Error(res.status);
        form.reset();
        status.classList.add('ok');
        status.textContent = 'Mensagem enviada, obrigado! Retornaremos em breve.';
      } catch {
        status.classList.add('err');
        status.textContent = 'Não foi possível enviar. Verifique os dados ou fale conosco por e-mail/telefone.';
      } finally { btn.disabled = false; }
    });
  }
})();
