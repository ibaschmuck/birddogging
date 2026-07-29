/* BIRDDOGGING — the two things this site actually does. */

// Change this to a real inbox if you want the work orders to go somewhere.
const TERRY_EMAIL = 'terry@birddogging.com';

/* ---- Visitor counter ------------------------------------------------------
   Started at 14,882 in 2011 and has, as advertised, never been reset. */
(function counter() {
  const el = document.getElementById('counter');
  if (!el) return;

  const BASE = 14882;
  let n;
  try {
    n = parseInt(localStorage.getItem('bd_visits') || '0', 10) + 1;
    localStorage.setItem('bd_visits', String(n));
  } catch (e) {
    n = 1; // private browsing — the counter still counts, it just forgets.
  }

  const digits = String(BASE + n).padStart(8, '0').split('');
  el.replaceChildren(...digits.map(d => {
    const s = document.createElement('span');
    s.textContent = d;
    return s;
  }));
})();

/* ---- Work order -> email --------------------------------------------------
   No backend. The form opens the visitor's mail client with the answers in it. */
(function workOrder() {
  const form = document.getElementById('wo');
  if (!form) return;

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const get = (name) => (form.elements[name].value || '').trim();

    const name = get('name');
    const town = get('town');

    const body = [
      'WORK ORDER — REQUEST FOR OBSERVATION',
      '',
      'Name:       ' + (name || '—'),
      'Town:       ' + (town || '—'),
      'Trade:      ' + get('trade'),
      'Start date: ' + (get('start') || '—'),
      '',
      'What I am worried they will do while I am at work:',
      get('fear') || '—',
      '',
      '—',
      'Submitted from birddogging.com'
    ].join('\n');

    const subject = 'Observation request' + (town ? ' — ' + town : '');
    window.location.href = 'mailto:' + TERRY_EMAIL +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
  });
})();
