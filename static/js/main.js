// Swiper Slider
const swiper = new Swiper('.hero-swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: { crossFade: true }
});

// Modal
const modal = document.getElementById('bookingModal');
const bookingBtns = document.querySelectorAll('#bookingBtn, #bookingBtn2');
const closeBtn = document.querySelector('.close');

bookingBtns.forEach(btn => {
    btn?.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

closeBtn?.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Burger menu
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

burger?.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    if (navMenu.classList.contains('show')) {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '80px';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'white';
        navMenu.style.padding = '30px';
        navMenu.style.gap = '20px';
        navMenu.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        navMenu.style.zIndex = '999';
    } else {
        navMenu.style.display = '';
    }
});

// Form submit
const bookingForm = document.getElementById('bookingForm');
bookingForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами для подтверждения записи.');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    bookingForm.reset();
});

// Scroll animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .feature, .master-card, .price-block').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.5s ease';
    observer.observe(el);
});


// ============================================
// ВСЕ КНОПКИ ЗВОНЯТ ПО ТЕЛЕФОНУ
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Находим все кнопки и ссылки с нужными текстами
    const buttons = document.querySelectorAll('a, button');

    const keywords = [
        'записаться',
        'подробнее',
        'узнать больше',
        'выбрать время',
        'запись онлайн',
        'записаться онлайн',
        'записаться на стрижку',
        'записаться на маникюр',
        'записаться в солярий',
        'записаться на диагностику',
        'записаться на процедуру'
    ];

    buttons.forEach(btn => {
        const text = btn.textContent.toLowerCase().trim();

        // Проверяем, есть ли ключевое слово в тексте кнопки
        const isMatch = keywords.some(keyword => text.includes(keyword));

        // Проверяем, что это не уже существующая ссылка с href
        const isNotLink = !btn.hasAttribute('href') || btn.getAttribute('href') === '#';

        if (isMatch && isNotLink) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'tel:+79870305861';
            });

            // Делаем курсор как у ссылки
            btn.style.cursor = 'pointer';
        }
    });
});