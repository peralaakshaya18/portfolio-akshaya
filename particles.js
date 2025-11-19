{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww22460\viewh12960\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // Particle background animation\
class ParticleBackground \{\
    constructor() \{\
        this.canvas = document.createElement('canvas');\
        this.ctx = this.canvas.getContext('2d');\
        this.particles = [];\
        this.particleCount = 50;\
        \
        this.init();\
    \}\
    \
    init() \{\
        // Style the canvas\
        this.canvas.style.position = 'fixed';\
        this.canvas.style.top = '0';\
        this.canvas.style.left = '0';\
        this.canvas.style.zIndex = '-2';\
        this.canvas.style.pointerEvents = 'none';\
        this.canvas.style.opacity = '0.6';\
        \
        document.body.appendChild(this.canvas);\
        \
        this.resize();\
        this.createParticles();\
        this.animate();\
        \
        window.addEventListener('resize', () => this.resize());\
    \}\
    \
    resize() \{\
        this.canvas.width = window.innerWidth;\
        this.canvas.height = window.innerHeight;\
    \}\
    \
    createParticles() \{\
        for (let i = 0; i < this.particleCount; i++) \{\
            this.particles.push(\{\
                x: Math.random() * this.canvas.width,\
                y: Math.random() * this.canvas.height,\
                vx: (Math.random() - 0.5) * 0.5,\
                vy: (Math.random() - 0.5) * 0.5,\
                size: Math.random() * 2 + 1,\
                opacity: Math.random() * 0.5 + 0.2,\
                color: Math.random() > 0.5 ? '0, 217, 255' : '78, 205, 196'\
            \});\
        \}\
    \}\
    \
    animate() \{\
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\
        \
        this.particles.forEach((particle, index) => \{\
            // Update position\
            particle.x += particle.vx;\
            particle.y += particle.vy;\
            \
            // Wrap around edges\
            if (particle.x < 0) particle.x = this.canvas.width;\
            if (particle.x > this.canvas.width) particle.x = 0;\
            if (particle.y < 0) particle.y = this.canvas.height;\
            if (particle.y > this.canvas.height) particle.y = 0;\
            \
            // Draw particle\
            this.ctx.beginPath();\
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);\
            this.ctx.fillStyle = `rgba($\{particle.color\}, $\{particle.opacity\})`;\
            this.ctx.fill();\
            \
            // Draw connections\
            this.particles.slice(index + 1).forEach(otherParticle => \{\
                const dx = particle.x - otherParticle.x;\
                const dy = particle.y - otherParticle.y;\
                const distance = Math.sqrt(dx * dx + dy * dy);\
                \
                if (distance < 100) \{\
                    this.ctx.beginPath();\
                    this.ctx.moveTo(particle.x, particle.y);\
                    this.ctx.lineTo(otherParticle.x, otherParticle.y);\
                    this.ctx.strokeStyle = `rgba($\{particle.color\}, $\{0.1 * (1 - distance / 100)\})`;\
                    this.ctx.lineWidth = 1;\
                    this.ctx.stroke();\
                \}\
            \});\
        \});\
        \
        requestAnimationFrame(() => this.animate());\
    \}\
\}\
\
// Initialize particles when page loads\
document.addEventListener('DOMContentLoaded', () => \{\
    new ParticleBackground();\
\});\
}