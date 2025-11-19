{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww24140\viewh11880\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // Main JS for the page\
// Typed.js is expected to be loaded before this file when referenced from HTML\
\
// Typed headline\
if (typeof Typed !== 'undefined') \{\
  new Typed('#typed', \{\
    strings: ['Software Developer'],\
    typeSpeed: 35, backSpeed: 18, backDelay: 1500, loop: true, smartBackspace: true, showCursor: false\
  \});\
\}\
\
// Footer year\
const yearEl = document.getElementById && document.getElementById('year');\
if (yearEl) yearEl.textContent = new Date().getFullYear();\
\
// Smooth scroll for same-page links with fallback for older browsers\
document.querySelectorAll('a[href^="#"]').forEach(a=>\{\
  a.addEventListener('click', e=>\{\
    const id = a.getAttribute('href').slice(1);\
    const el = document.getElementById(id);\
    if(el)\{\
      e.preventDefault();\
      try\{\
        el.scrollIntoView(\{behavior:'smooth', block:'start'\});\
      \}catch(_)\{\
        // fallback\
        el.scrollIntoView();\
      \}\
    \}\
  \});\
\});\
\
// mobile nav toggle (accessible)\
(function()\{\
  const btn = document.getElementById('nav-toggle');\
  const list = document.getElementById('nav-list');\
  if(!btn || !list) return;\
  const firstLink = list.querySelector('a');\
\
  // helper to avoid double-firing on touch+click and normalize tap handling\
  function addTapListener(el, handler)\{\
    let locked = false;\
    const wrap = (e)=>\{\
      if(locked) return; locked = true;\
      try\{ handler(e); \}finally\{ setTimeout(()=>locked=false, 300); \}\
    \};\
    el.addEventListener('click', wrap);\
    el.addEventListener('touchstart', (e)=>\{ e.preventDefault(); wrap(e); \}, \{passive:false\});\
  \}\
\
  function open()\{ list.classList.add('open'); btn.setAttribute('aria-expanded','true'); if(firstLink) firstLink.focus(); \}\
  function close()\{ list.classList.remove('open'); btn.setAttribute('aria-expanded','false'); btn.focus(); \}\
  function toggle()\{ list.classList.contains('open') ? close() : open(); \}\
\
  addTapListener(btn, (e)=>\{ e.stopPropagation(); toggle(); \});\
\
  // close when clicking/tapping outside\
  document.addEventListener('click', (e)=>\{\
    if(!list.classList.contains('open')) return;\
    if(e.target === btn || btn.contains(e.target) || list.contains(e.target)) return;\
    close();\
  \});\
  document.addEventListener('touchstart', (e)=>\{\
    if(!list.classList.contains('open')) return;\
    if(e.target === btn || btn.contains(e.target) || list.contains(e.target)) return;\
    close();\
  \}, \{passive:true\});\
\
  // close on Escape\
  document.addEventListener('keydown', (e)=>\{ if(e.key === 'Escape' && list.classList.contains('open')) close(); \});\
  // close when navigating\
  list.querySelectorAll('a').forEach(a=> addTapListener(a, ()=> close()));\
\})();\
}