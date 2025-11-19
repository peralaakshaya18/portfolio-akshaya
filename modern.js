{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww23100\viewh12240\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // Modern Portfolio JavaScript\
document.addEventListener('DOMContentLoaded', function() \{\
    \
    // Header scroll effect\
    const header = document.getElementById('header');\
    window.addEventListener('scroll', () => \{\
        if (window.scrollY > 100) \{\
            header.classList.add('scrolled');\
        \} else \{\
            header.classList.remove('scrolled');\
        \}\
    \});\
    \
    // Typing animation - only show Software Developer\
    const typingText = document.querySelector('.typing-text');\
    if (typingText) \{\
        const title = 'Software Developer';\
        let charIndex = 0;\
        let isDeleting = false;\
        \
        function typeWriter() \{\
            if (isDeleting) \{\
                typingText.textContent = title.substring(0, charIndex - 1);\
                charIndex--;\
            \} else \{\
                typingText.textContent = title.substring(0, charIndex + 1);\
                charIndex++;\
            \}\
            \
            let typeSpeed = 150;\
            \
            if (isDeleting) \{\
                typeSpeed /= 2;\
            \}\
            \
            if (!isDeleting && charIndex === title.length) \{\
                typeSpeed = 3000; // Pause when complete\
                isDeleting = true;\
            \} else if (isDeleting && charIndex === 0) \{\
                isDeleting = false;\
                typeSpeed = 500;\
            \}\
            \
            setTimeout(typeWriter, typeSpeed);\
        \}\
        \
        typeWriter();\
    \}\
    \
    // Smooth scrolling for navigation links\
    document.querySelectorAll('a[href^="#"]').forEach(anchor => \{\
        anchor.addEventListener('click', function (e) \{\
            e.preventDefault();\
            const target = document.querySelector(this.getAttribute('href'));\
            if (target) \{\
                target.scrollIntoView(\{\
                    behavior: 'smooth',\
                    block: 'start'\
                \});\
            \}\
        \});\
    \});\
    \
    // Active navigation highlighting\
    const sections = document.querySelectorAll('section');\
    const navLinks = document.querySelectorAll('.nav-links a');\
    \
    window.addEventListener('scroll', () => \{\
        let current = '';\
        sections.forEach(section => \{\
            const sectionTop = section.offsetTop;\
            const sectionHeight = section.clientHeight;\
            if (window.pageYOffset >= sectionTop - 200) \{\
                current = section.getAttribute('id');\
            \}\
        \});\
        \
        navLinks.forEach(link => \{\
            link.classList.remove('active');\
            if (link.getAttribute('href') === `#$\{current\}`) \{\
                link.classList.add('active');\
            \}\
        \});\
    \});\
    \
    // Card hover effects with mouse tracking\
    document.querySelectorAll('.card').forEach(card => \{\
        card.addEventListener('mousemove', (e) => \{\
            const rect = card.getBoundingClientRect();\
            const x = e.clientX - rect.left;\
            const y = e.clientY - rect.top;\
            \
            const centerX = rect.width / 2;\
            const centerY = rect.height / 2;\
            \
            const rotateX = (y - centerY) / 10;\
            const rotateY = (centerX - x) / 10;\
            \
            card.style.transform = `perspective(1000px) rotateX($\{rotateX\}deg) rotateY($\{rotateY\}deg) translateY(-8px)`;\
        \});\
        \
        card.addEventListener('mouseleave', () => \{\
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';\
        \});\
    \});\
    \
    // Intersection Observer for animations\
    const observerOptions = \{\
        threshold: 0.1,\
        rootMargin: '0px 0px -100px 0px'\
    \};\
    \
    const observer = new IntersectionObserver((entries) => \{\
        entries.forEach(entry => \{\
            if (entry.isIntersecting) \{\
                entry.target.style.opacity = '1';\
                entry.target.style.transform = 'translateY(0)';\
            \}\
        \});\
    \}, observerOptions);\
    \
    // Observe cards and animated elements\
    document.querySelectorAll('.card, .tech-item').forEach(el => \{\
        el.style.opacity = '0';\
        el.style.transform = 'translateY(50px)';\
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';\
        observer.observe(el);\
    \});\
    \
    // Button click effects\
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => \{\
        btn.addEventListener('click', function(e) \{\
            let ripple = document.createElement('span');\
            ripple.classList.add('ripple');\
            this.appendChild(ripple);\
            \
            let x = e.clientX - e.target.offsetLeft;\
            let y = e.clientY - e.target.offsetTop;\
            \
            ripple.style.left = `$\{x\}px`;\
            ripple.style.top = `$\{y\}px`;\
            \
            setTimeout(() => \{\
                ripple.remove();\
            \}, 600);\
        \});\
    \});\
    \
    // Parallax effect for background\
    window.addEventListener('scroll', () => \{\
        const scrolled = window.pageYOffset;\
        const parallax = document.querySelector('.bg-gradient');\
        const speed = scrolled * 0.5;\
        \
        if (parallax) \{\
            parallax.style.transform = `translateY($\{speed\}px)`;\
        \}\
    \});\
    \
    // Theme toggle functionality\
    const themeToggle = document.getElementById('themeToggle');\
    if (themeToggle) \{\
        themeToggle.addEventListener('click', () => \{\
            // Add a subtle rotation animation\
            themeToggle.style.transform = 'rotate(180deg)';\
            setTimeout(() => \{\
                themeToggle.style.transform = 'rotate(0deg)';\
            \}, 300);\
        \});\
    \}\
\});\
\
// Add CSS for ripple effect\
const style = document.createElement('style');\
style.textContent = `\
    .ripple \{\
        position: absolute;\
        border-radius: 50%;\
        background: rgba(255, 255, 255, 0.3);\
        transform: scale(0);\
        animation: ripple-animation 0.6s linear;\
        pointer-events: none;\
    \}\
    \
    @keyframes ripple-animation \{\
        to \{\
            transform: scale(4);\
            opacity: 0;\
        \}\
    \}\
`;\
document.head.appendChild(style);\
}