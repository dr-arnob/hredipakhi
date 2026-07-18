document.addEventListener("DOMContentLoaded", () => {
    initApp();
    setupCanvas();
    setupMobileTouchEggs();
});

const APP_STATE = {
    currentLayerIndex: 1,
    galleryImages: [
        { src: 'images/01.jpg', caption: 'তোমার ওই মিষ্টি হাসির প্রেমে আমি হাজার বার পড়তে পারি। ❤️' },
        { src: 'images/02.jpg', caption: 'প্রতিটি দিন যেন কেটে যায় তোমার চোখের ওই মায়াবী চাহনিতে।' },
        { src: 'images/03.jpg', caption: 'মেঘলা আকাশেও তোমার উপস্থিতি আমার মনে রোদ এনে দেয়। ✨' },
        { src: 'images/04.jpg', caption: 'আজকের এই বিশেষ দিনে পৃথিবীর সমস্ত আনন্দ তোমার হোক।' },
        { src: 'images/05.jpg', caption: 'আমার জীবনের প্রতিটি সুন্দর মুহূর্ত জুড়ে শুধু তুমিই আছো।' },
        { src: 'images/06.jpg', caption: 'হৃদিপাখি, তোমার ভালোবাসাই আমার ভালো থাকার একমাত্র কারণ।' },
        { src: 'images/07.jpg', caption: 'হাতটি ধরে আজীবন এভাবেই তোমার পাশে হাঁটতে চাই।' },
        { src: 'images/08.jpg', caption: 'তোমার সুখের প্রতিটি মুহূর্তে হাসিমুখে পাশে থাকতে চাই।' },
        { src: 'images/09.jpg', caption: 'ঈশ্বর যেন আমার জীবনের সেরা উপহার হিসেবে তোমাকেই আজীবন আগলে রাখেন।' },
        { src: 'images/10.jpg', caption: 'শুভ জন্মদিন আমার হৃদয়ের রানী, আমার মিষ্টি হৃদিপাখি! 🎂💖' }
    ],
    currentSliderIndex: 0,
    activeEffects: 'stars', 
    letterText: `প্রিয় হৃদিপাখি…\n\nআজকের এই বিশেষ দিনটি শুধুমাত্র তোমার নয়, এটি আমার জীবনেরও সবচেয়ে পবিত্র এবং আনন্দের একটি দিন। কারণ আজকের এই দিনে পৃথিবীতে তোমার আগমন ঘটেছিল, যার হাত ধরে পরবর্তীতে আমি আমার জীবনের আসল অর্থ খুঁজে পেয়েছি।\n\nতুমি শুধু আমার ভালোবাসাই নও, তুমি আমার শান্ত দুপুরের এক পশলা বৃষ্টি, আমার অন্ধকার রাতের ধ্রুবতারা। তোমার ওই মিষ্টি চোখের চাহনি, আর মন ভোলানো অমায়িক হাসি আমার সমস্ত ক্লান্তি নিমেষেই দূর করে দেয়। আমি যখনই তোমার দিকে তাকাই, প্রতিবার নতুন করে তোমার প্রেমে পড়ে যাই। কোনো কৃত্রিমতা ছাড়াই তুমি আমার জীবনের সবচেয়ে সুন্দর এবং উজ্জ্বলতম নক্ষত্র।\n\nজীবনের প্রতিটি পদক্ষেপে, প্রতিটি সুখে আর দুঃখে আমি তোমার পাশে একটি শক্ত পাহাড়ের মতো দাঁড়িয়ে থাকতে চাই। তোমার চোখের কোণে কখনো যেন এক ফোঁটা জলও না আসে, সেই দায়িত্ব আমার। তোমার প্রতিটি স্বপ্নকে সত্যি করতে আমি আমার সর্বোচ্চ চেষ্টা করব, এটি আজ তোমার জন্মদিনে আমার দেওয়া একটি ছোট্ট প্রতিশ্রুতি।\n\nহৃদিপাখি, তুমি পাশে থাকলে আমার এই পুরো পৃথিবীটা অনেক বেশি সুন্দর মনে হয়। আমি শব্দ দিয়ে কোনোদিন প্রকাশ করতে পারব না যে আমি তোমাকে কতটা ভালোবাসি। শুধু এতটুকুই জেনে রেখো, এই হৃদয়ের প্রতিটি স্পন্দন শুধু তোমার নামেই চলে। জীবনের শেষ দিন পর্যন্ত, শেষ নিঃশ্বাস থাকা পর্যন্ত আমি শুধু তোমার এই অর্ণব হয়েই থাকতে চাই।\n\nআজকের এই বিশেষ মুহূর্তে আমি ঈশ্বরের কাছে তোমার দীর্ঘায়ু, সুস্বাস্থ্য এবং সীমাহীন আনন্দের প্রার্থনা করছি। তোমার জীবনের আগামী দিনগুলো যেন ভালোবাসায় এবং সাফল্যে পরিপূর্ণ থাকে।\n\nশুভ জন্মদিন আমার হৃদিপাখি! অনেক অনেক ভালোবাসি তোমাকে।\n\nসর্বদা তোমার,\nঅর্ণব`
};

function switchLayer(nextLayerId) {
    const currentLayer = document.querySelector('.active-layer');
    const nextLayer = document.getElementById(nextLayerId);
    
    if (currentLayer) {
        currentLayer.style.opacity = '0';
        setTimeout(() => {
            currentLayer.classList.remove('active-layer');
            currentLayer.classList.add('hidden');
            
            if (nextLayer) {
                nextLayer.classList.remove('hidden');
                setTimeout(() => {
                    nextLayer.classList.add('active-layer');
                    triggerLayerCallback(nextLayerId);
                }, 50);
            }
        }, 1200);
    }
}

function initApp() {
    let progress = 0;
    const progressBar = document.getElementById('main-progress');
    
    const progressInterval = setInterval(() => {
        progress += Math.floor(Math.random() * 10) + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            setTimeout(() => {
                switchLayer('layer-hero');
            }, 500);
        }
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    }, 100);
}

function triggerLayerCallback(layerId) {
    if (layerId !== 'layer-loading') {
        const controls = document.getElementById('mobile-touch-controls');
        if (controls) controls.classList.remove('hidden');
    }

    if (layerId === 'layer-hero') {
        APP_STATE.activeEffects = 'stars';
        runTypingAnimation('typing-sub', 'অর্ণবের পক্ষ থেকে…', 80, () => {
            runTypingAnimation('typing-main', 'শুভ জন্মদিন', 100, () => {
                runTypingAnimation('typing-name', '❤️ হৃদিপাখি ❤️', 120, () => {
                    const startBtn = document.getElementById('btn-start');
                    if (startBtn) {
                        startBtn.classList.remove('hidden-element');
                        startBtn.classList.add('visible-element');
                        startBtn.onclick = () => switchLayer('layer-gift');
                    }
                });
            });
        });
    }
    
    if (layerId === 'layer-gift') {
        const giftBox = document.getElementById('main-gift-box');
        if (giftBox) {
            giftBox.onclick = () => {
                if (!giftBox.classList.contains('open')) {
                    giftBox.classList.add('open');
                    APP_STATE.activeEffects = 'fireworks';
                    const audio = document.getElementById('bg-music');
                    if (audio) {
                        audio.play().catch(e => console.log("Audio play deferred."));
                    }
                    setTimeout(() => switchLayer('layer-gallery'), 2000);
                }
            };
        }
    }

    if (layerId === 'layer-gallery') {
        renderGallery();
    }

    if (layerId === 'layer-letter') {
        runTypingAnimation('love-letter-text', APP_STATE.letterText, 30, () => {
            const btn = document.getElementById('btn-to-cake');
            if (btn) {
                btn.classList.remove('hidden-element');
                btn.classList.add('visible-element');
                btn.onclick = () => switchLayer('layer-cake');
            }
        }, true);
    }

    if (layerId === 'layer-cake') {
        const candle = document.getElementById('main-candle');
        if (candle) {
            candle.onclick = () => {
                const flame = document.getElementById('candle-flame');
                if (flame) flame.classList.add('out');
                
                const inst = document.getElementById('cake-instruction');
                if (inst) inst.innerText = "জন্মদিনের অনেক অনেক শুভেচ্ছা! 🥳";
                
                APP_STATE.activeEffects = 'fireworks';
                
                setTimeout(() => {
                    const btn = document.getElementById('btn-to-final');
                    if (btn) {
                        btn.classList.remove('hidden-element');
                        btn.classList.add('visible-element');
                        btn.onclick = () => switchLayer('layer-final');
                    }
                }, 1500);
            };
        }
    }
    
    if (layerId === 'layer-final') {
        APP_STATE.activeEffects = 'combo';
    }
}

function runTypingAnimation(targetId, text, speed, callback, isLongText = false) {
    const element = document.getElementById(targetId);
    if (!element) return;
    let index = 0;
    element.innerHTML = '';
    
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            if (isLongText && index % 15 === 0) {
                element.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

function renderGallery() {
    const slider = document.getElementById('main-slider');
    if (!slider) return;
    slider.innerHTML = '';
    
    APP_STATE.galleryImages.forEach((img, i) => {
        const card = document.createElement('div');
        card.classList.add('glass-card');
        if (i === 0) card.classList.add('active');
        if (i === 1) card.classList.add('next');
        
        // Dynamic fallback array matching root or images folder logic
        card.innerHTML = `
            <img src="${img.src}" onerror="this.onerror=null; this.src='${img.src.replace('images/', '')}';" alt="Original Photo">
            <div class="card-caption">${img.caption}</div>
        `;
        slider.appendChild(card);
    });

    let startX = 0;
    slider.ontouchstart = (e) => startX = e.touches[0].clientX;
    slider.ontouchend = (e) => {
        let endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) moveSlider(1); 
        if (endX - startX > 50) moveSlider(-1); 
    };

    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const letterBtn = document.getElementById('btn-to-letter');

    if (nextBtn) nextBtn.onclick = () => moveSlider(1);
    if (prevBtn) prevBtn.onclick = () => moveSlider(-1);
    if (letterBtn) letterBtn.onclick = () => switchLayer('layer-letter');
}

function moveSlider(direction) {
    const cards = document.querySelectorAll('.glass-card');
    if (cards.length === 0) return;
    cards[APP_STATE.currentSliderIndex].classList.remove('active', 'prev', 'next');
    
    APP_STATE.currentSliderIndex = (APP_STATE.currentSliderIndex + direction + cards.length) % cards.length;
    
    cards.forEach((card, index) => {
        card.classList.remove('active', 'prev', 'next');
        if (index === APP_STATE.currentSliderIndex) {
            card.classList.add('active');
        } else if (index === (APP_STATE.currentSliderIndex - 1 + cards.length) % cards.length) {
            card.classList.add('prev');
        } else if (index === (APP_STATE.currentSliderIndex + 1) % cards.length) {
            card.classList.add('next');
        }
    });
}

let canvas, ctx, particles = [];

function setupCanvas() {
    canvas = document.getElementById('effect-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animateParticles();
}

function resizeCanvas() {
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}

class Particle {
    constructor(type, x, y) {
        this.type = type;
        this.x = x || Math.random() * canvas.width;
        this.y = y || (type === 'stars' ? Math.random() * canvas.height : -10);
        this.size = type === 'stars' ? Math.random() * 2 : Math.random() * 4 + 2;
        this.speedX = type === 'stars' ? 0 : Math.random() * 2 - 1;
        this.speedY = type === 'stars' ? 0 : Math.random() * 2 + 1;
        this.color = type === 'fireworks' ? `hsl(${Math.random() * 360}, 100%, 60%)` : type === 'hearts' ? '#ff758c' : '#ffffff';
        this.alpha = 1;
        this.life = type === 'fireworks' ? Math.random() * 60 + 40 : 100;
    }
    
    update() {
        if (this.type === 'fireworks') {
            this.x += this.speedX * 3;
            this.y += this.speedY * 3;
            this.life--;
        } else if (this.type === 'hearts' || this.type === 'rain') {
            this.y += this.speedY;
            this.x += this.speedX;
        }
        if (this.type === 'stars') {
            this.alpha += Math.random() * 0.04 - 0.02;
            if (this.alpha < 0.2) this.alpha = 0.2;
            if (this.alpha > 1) this.alpha = 1;
        }
    }
    
    draw() {
        ctx.save();
        ctx.globalAlpha = this.type === 'stars' ? this.alpha : this.life ? this.life/100 : 1;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

function animateParticles() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (Math.random() < 0.1 && particles.filter(p => p.type === 'stars').length < 150) {
        particles.push(new Particle('stars'));
    }

    if (APP_STATE.activeEffects === 'fireworks' && Math.random() < 0.05) {
        let fX = Math.random() * canvas.width, fY = Math.random() * canvas.height * 0.5;
        for (let i = 0; i < 40; i++) {
            let p = new Particle('fireworks', fX, fY);
            p.speedX = Math.random() * 2 - 1; p.speedY = Math.random() * 2 - 1;
            particles.push(p);
        }
    }
    
    if (APP_STATE.activeEffects === 'rain' && Math.random() < 0.4) {
        particles.push(new Particle('rain'));
    }
    
    if (APP_STATE.activeEffects === 'hearts' && Math.random() < 0.2) {
        let p = new Particle('hearts'); p.color = '#ff4b5c';
        particles.push(p);
    }

    if (APP_STATE.activeEffects === 'combo') {
        if (Math.random() < 0.02) {
            let fX = Math.random() * canvas.width, fY = Math.random() * canvas.height * 0.4;
            for (let i = 0; i < 30; i++) {
                let p = new Particle('fireworks', fX, fY);
                p.speedX = Math.random() * 2 - 1; p.speedY = Math.random() * 2 - 1;
                particles.push(p);
            }
        }
        if (Math.random() < 0.1) particles.push(new Particle('hearts'));
    }

    particles = particles.filter(p => {
        p.update();
        p.draw();
        if (p.type === 'fireworks' && p.life <= 0) return false;
        if (p.y > canvas.height) return false;
        return true;
    });

    requestAnimationFrame(animateParticles);
}

function setupMobileTouchEggs() {
    const toast = document.getElementById('easter-egg-toast');
    if (!toast) return;
    
    function showToast(msg) {
        toast.innerText = msg;
        toast.classList.remove('hidden');
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.classList.add('hidden'), 500);
        }, 3000);
    }

    const heartBtn = document.getElementById('btn-touch-heart');
    const rainBtn = document.getElementById('btn-touch-rain');
    const moon = document.getElementById('interactive-moon');
    const cake = document.getElementById('birthday-cake');

    if (heartBtn) {
        heartBtn.onclick = (e) => {
            e.stopPropagation();
            APP_STATE.activeEffects = 'hearts';
            showToast("💖 হৃদিপাখির জন্য ভালোবাসার বৃষ্টি শুরু হলো!");
        };
    }

    if (rainBtn) {
        rainBtn.onclick = (e) => {
            e.stopPropagation();
            APP_STATE.activeEffects = 'rain';
            showToast("🌧️ শুভ জন্মদিনের বিশেষ শাওয়ার রেইন!");
        };
    }

    if (moon) {
        moon.onclick = (e) => {
            e.stopPropagation();
            showToast("🌙 'চাঁদের চেয়েও সুন্দর আমার হৃদিপাখি' — অর্ণব");
        };
    }

    if (cake) {
        let lastTap = 0;
        cake.onclick = () => {
            let now = new Date().getTime();
            if (now - lastTap < 300) {
                APP_STATE.activeEffects = 'fireworks';
                showToast("🎁 সিক্রেট ইস্টার এগ আনলকড! অতিরিক্ত আতশবাজি শুরু হয়েছে!");
            }
            lastTap = now;
        };
    }
}
