import { dailyFortune } from './fortunes.js';
import { dayKey, nextMidnight, formatCountdown } from './daily.js';

const chest = document.querySelector('#chest');
const scene = document.querySelector('#scene');
const card = document.querySelector('#fortune-card');
const countdown = document.querySelector('#countdown');
const timer = document.querySelector('#countdown-time');
const storageKey = 'little-treasure-opened-day';
// A local testing link resets only this app's saved opening, never production.
if (import.meta.env.DEV) {
  const url = new URL(window.location.href);
  if (url.searchParams.get('reset') === '1') {
    try {
      localStorage.removeItem(storageKey);
      url.searchParams.delete('reset');
      window.history.replaceState(null, '', url);
    } catch {
      // If storage is unavailable, the app already starts with a closed chest.
    }
  }
}
const instruction = document.querySelector('#instruction');
const status = document.querySelector('#status');
const hearts = [...document.querySelectorAll('.progress span')];
const hints = ['Dein kleiner Glücksmoment wartet.', 'Da steckt ganz viel Liebe drin.', 'Ein bisschen mehr Magie …', 'Dein Schatz ist schon ganz nah.', 'Nur noch eine kleine Berührung.'];
let taps = 0;
let revealTimer;
let currentDay = dayKey();
let unlockAt = nextMidnight();
let openedDay = readOpenedDay();

function readOpenedDay() {
  try { return localStorage.getItem(storageKey); }
  catch { return null; }
}

function renderFortune() {
  const fortune = dailyFortune();
  document.querySelector('#card-heading').textContent = fortune.title;
  document.querySelector('#fortune-text').textContent = fortune.text;
}

function showOpened() {
  taps = 5;
  chest.disabled = true;
  chest.setAttribute('aria-label', 'Heute bereits geöffnet. Der nächste Schatz wartet um Mitternacht.');
  scene.classList.add('opened');
  hearts.forEach(heart => heart.classList.add('filled'));
  renderFortune();
  instruction.hidden = true;
  card.hidden = false;
  countdown.hidden = false;
  document.querySelector('.treasure').classList.add('revealed');
  timer.textContent = formatCountdown(unlockAt - Date.now());
}

function syncDay() {
  const now = new Date();
  const today = dayKey(now);
  if (today !== currentDay) {
    currentDay = today;
    unlockAt = nextMidnight(now);
    clearTimeout(revealTimer);
    resetChest();
  }
  const savedDay = readOpenedDay();
  if (savedDay === today) openedDay = savedDay;
  if (openedDay === today && taps < 5) showOpened();
  if (openedDay === today) timer.textContent = formatCountdown(unlockAt - now.getTime());
}

chest.addEventListener('click', () => {
  syncDay();
  if (taps >= 5 || openedDay === currentDay) return;
  taps += 1;
  hearts[taps - 1].classList.add('filled');
  chest.getAnimations().forEach(animation => animation.cancel());
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    chest.animate([{ transform: 'rotate(0deg) scale(1)' }, { transform: `rotate(-${2 + taps}deg) scale(.96)` }, { transform: `rotate(${2 + taps}deg) scale(1.04)` }, { transform: 'rotate(0deg) scale(1)' }], { duration: 370, easing: 'ease-out' });
  }
  if (taps < 5) {
    document.querySelector('#hint').textContent = hints[taps];
    document.querySelector('#tap-label').textContent = `Noch ${5 - taps} ${taps === 4 ? 'Berührung' : 'Berührungen'}`;
    chest.setAttribute('aria-label', `Schatztruhe öffnen. Noch ${5 - taps} ${taps === 4 ? 'Berührung' : 'Berührungen'}.`);
    status.textContent = `Noch ${5 - taps} ${taps === 4 ? 'Berührung' : 'Berührungen'} bis zu deinem Schatz.`;
    return;
  }
  openedDay = currentDay;
  try { localStorage.setItem(storageKey, openedDay); }
  catch {
    document.querySelector('#storage-note').hidden = false;
  }
  chest.disabled = true;
  scene.classList.add('opened');
  document.querySelector('#hint').textContent = 'Ein kleiner Schatz für ein großes Herz.';
  document.querySelector('#tap-label').textContent = 'Nur für dich.';
  renderFortune();
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion) celebrate();
  revealTimer = setTimeout(() => {
    // Midnight can occur during the opening animation.
    if (dayKey() !== currentDay) {
      syncDay();
      return;
    }
    showOpened();
    status.textContent = 'Deine Truhe ist offen. Deine Botschaft für heute ist da.';
    card.focus({ preventScroll: true });
    card.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'nearest' });
  }, reducedMotion ? 0 : 1050);
});

function resetChest() {
  clearTimeout(revealTimer);
  taps = 0;
  card.hidden = true;
  countdown.hidden = true;
  instruction.hidden = false;
  chest.disabled = false;
  scene.classList.remove('opened');
  document.querySelector('.treasure').classList.remove('revealed');
  hearts.forEach(heart => heart.classList.remove('filled'));
  document.querySelector('#particles').replaceChildren();
  document.querySelector('#hint').textContent = hints[0];
  document.querySelector('#tap-label').textContent = 'Tippe 5-mal auf die Truhe';
  chest.setAttribute('aria-label', 'Schatztruhe öffnen. Noch fünfmal tippen.');
  status.textContent = 'Ein neuer Tag, ein neuer Schatz! Du kannst deine Truhe jetzt öffnen.';
}

if (openedDay === currentDay) showOpened();
syncDay();
setInterval(syncDay, 1000);
window.addEventListener('storage', syncDay);
window.addEventListener('focus', syncDay);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) syncDay();
});

function celebrate() {
  const particles = document.querySelector('#particles');
  for (let i = 0; i < 18; i++) {
    const particle = document.createElement('span');
    particle.textContent = i % 3 === 0 ? '♥' : '✦';
    particle.style.setProperty('--x', `${Math.cos(i * 2.4) * (85 + Math.random() * 80)}px`);
    particle.style.setProperty('--y', `${-60 - Math.random() * 150}px`);
    particle.style.setProperty('--r', `${Math.random() * 100 - 50}deg`);
    particle.style.animationDelay = `${Math.random() * 140}ms`;
    particles.append(particle);
    particle.addEventListener('animationend', () => particle.remove(), { once: true });
  }
}
