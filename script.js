(function () {
    'use strict';

    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---------- Theme toggle (light / dark), remembered per viewer ----------
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = themeBtn ? themeBtn.querySelector('i') : null;

    function currentTheme() {
        const explicit = root.getAttribute('data-theme');
        if (explicit) return explicit;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function syncThemeIcon() {
        if (!themeIcon) return;
        const dark = currentTheme() === 'dark';
        themeIcon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
        themeBtn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    }

    try {
        const saved = localStorage.getItem('theme');
        if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
    } catch (e) { /* storage unavailable: fall back to system theme */ }

    syncThemeIcon();

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const next = currentTheme() === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            try { localStorage.setItem('theme', next); } catch (e) {}
            syncThemeIcon();
        });
    }

    // ---------- Mobile menu ----------
    const menuBtn = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    function setMenu(open) {
        navLinks.classList.toggle('open', open);
        menuBtn.setAttribute('aria-expanded', String(open));
        menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        menuBtn.querySelector('i').className = open ? 'fas fa-xmark' : 'fas fa-bars';
    }

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
        navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
        document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
    }

    // ---------- Active nav link while scrolling ----------
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const links = Array.from(document.querySelectorAll('.nav-links a'));

    const navObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const id = entry.target.id;
            links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => navObserver.observe(s));

    // ---------- Reveal on scroll ----------
    const revealEls = document.querySelectorAll('.reveal');
    if (reduceMotion || !('IntersectionObserver' in window)) {
        revealEls.forEach(el => el.classList.add('is-visible'));
    } else {
        const revealObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach((el, i) => {
            el.style.transitionDelay = (i % 3) * 80 + 'ms';
            revealObserver.observe(el);
        });
    }

    // ---------- Project filters ----------
    const filterBtns = document.querySelectorAll('.filter');
    const projects = document.querySelectorAll('.project');
    const emptyState = document.getElementById('empty-state');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const f = btn.dataset.filter;
            filterBtns.forEach(b => {
                const on = b === btn;
                b.classList.toggle('active', on);
                b.setAttribute('aria-pressed', String(on));
            });

            let shown = 0;
            projects.forEach(p => {
                const tags = (p.dataset.tags || '').split(/\s+/);
                const match = f === 'all' || tags.includes(f);
                p.hidden = !match;
                if (match) shown++;
            });
            if (emptyState) emptyState.hidden = shown !== 0;
        });
    });

    // ---------- Copy email ----------
    const copyBtn = document.getElementById('copy-email');
    if (copyBtn) {
        const label = copyBtn.querySelector('span');
        copyBtn.addEventListener('click', async () => {
            const email = 'pradeep.kothakota@gmail.com';
            try {
                await navigator.clipboard.writeText(email);
                label.textContent = 'Copied!';
            } catch (e) {
                label.textContent = email;
            }
            setTimeout(() => { label.textContent = 'Copy email'; }, 2000);
        });
    }
})();
