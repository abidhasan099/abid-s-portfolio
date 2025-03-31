// মেনু বাটন টগল ফাংশন
document.getElementById('menuBtn').addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
});

// বর্তমান বছর ফুটারে দেখানো
document.getElementById('currentYear').textContent = new Date().getFullYear();

// নেভিগেশন মেনু আইটেম ক্লিক হ্যান্ডলার
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // মেনু বন্ধ করুন
        document.getElementById('navMenu').classList.remove('active');
        
        // সক্রিয় লিঙ্ক আপডেট করুন
        document.querySelectorAll('.nav-menu a').forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        
        // সংশ্লিষ্ট সেকশনে স্ক্রল করুন
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// পেজ লোড হলে ওয়াটার ড্রপ এনিমেশন তৈরি
window.addEventListener('load', function() {
    createWaterDrops();
});

// ওয়াটার ড্রপ এনিমেশন তৈরি
function createWaterDrops() {
    const waterDropContainer = document.querySelector('.water-drop-animation');
    
    // 10টি ড্রপ তৈরি করুন
    for (let i = 0; i < 20; i++) {
        const drop = document.createElement('div');
        drop.className = 'drop';
        
        // র‍্যান্ডম পজিশন
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = 5 + Math.random() * 5;
        const delay = Math.random() * 3;
        
        drop.style.top = `${top}%`;
        drop.style.left = `${left}%`;
        drop.style.width = `${size}px`;
        drop.style.height = `${size}px`;
        drop.style.animationDelay = `${delay}s`;
        
        waterDropContainer.appendChild(drop);
    }
}

// স্ক্রল ইভেন্টে সেকশন ডিটেকশন
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const id = section.getAttribute('id');
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});