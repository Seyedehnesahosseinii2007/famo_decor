<<<<<<< HEAD
<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function () {
    // آرایه تایتل‌ها و بخش‌های محصولات به ترتیب
    const headings = [
        document.querySelector('.the-heading-vas'),
        document.querySelector('.the-candle-holder'),
        document.querySelector('.the-glass'),
        document.querySelector('.the-lamp')
    ];
    const sections = [
        document.querySelector('.horizental-one'),
        document.querySelector('.horizental-two'),
        document.querySelector('.horizental-three'),
        document.querySelector('.horizental-four')
    ];

    // دکمه‌های منو
    const btns = [
        document.querySelector('.menu1 a'),
        document.querySelector('.menu2 a'),
        document.querySelector('.menu3 a'),
        document.querySelector('.menu4 a')
    ];

    function showSection(index) {
        // نمایش فقط تایتل و بخش انتخاب شده
        headings.forEach((head, i) => {
            if (head) head.style.display = (i === index) ? 'block' : 'none';
        });
        sections.forEach((sec, i) => {
            if (sec) {
                if (i === index) {
                    sec.style.display = 'flex';
                    sec.classList.remove('slide-up-animation');
                    void sec.offsetWidth; // ریست انیمیشن
                    sec.classList.add('slide-up-animation');
                } else {
                    sec.style.display = 'none';
                    sec.classList.remove('slide-up-animation');
                }
            }
        });
    }

    // نمایش پیش‌فرض گلدان
    showSection(0);

    // اضافه کردن event به دکمه‌ها
    btns.forEach((btn, i) => {
        if (btn) {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                showSection(i);
            });
        }
    });
});

=======
"use strict";
const vaseelement = document.getElementsByClassName("menu1");
const menuBTN = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
// for humburger menu close and open 
if (menuBTN && menu) {
    menuBTN.addEventListener('click', () => {
        menuBTN.classList.toggle('open');
        menu.classList.toggle('open');
    });
}
document.onclick = (event) => {
    if (menu && menuBTN && !menu.contains(event.target) && !menuBTN.contains(event.target)) {
        menuBTN.classList.remove('open');
        menu.classList.remove('open');
    }
};
>>>>>>> parent of 1605530 (jjjjjjjjj)
=======
document.addEventListener("DOMContentLoaded", () => {
    const menus = {
        menu1: ['.the-heading-vase', '.horizental-one'],
        menu2: ['.the-candle-holder', '.horizental-two'],
        menu3: ['.the-glass', '.horizental-three'],
        menu4: ['.the-lamp', '.horizental-four']
    };

    Object.entries(menus).forEach(([menuClass, sectionClasses]) => {
        const el = document.querySelector(`.${menuClass}`);
        el.addEventListener("click", (e) => {
            e.preventDefault(); // جلوی بالا رفتن صفحه رو بگیر

            Object.values(menus).forEach(([titleSelector, sectionSelector]) => {
                const titleEl = document.querySelector(titleSelector);
                const sectionEl = document.querySelector(sectionSelector);
                if (titleEl) titleEl.style.display = 'none';
                if (sectionEl) sectionEl.style.display = 'none';
            });

            const [titleToShow, sectionToShow] = menus[menuClass];
            const titleEl = document.querySelector(titleToShow);
            const sectionEl = document.querySelector(sectionToShow);
            if (titleEl && sectionEl) {
                titleEl.style.display = 'flex';
                sectionEl.style.display = 'flex';

                sectionEl.classList.remove('slide-up-animation');
                void sectionEl.offsetWidth;
                sectionEl.classList.add('slide-up-animation');
            }
        });
    });
});
>>>>>>> parent of 12209a6 (finished responsive hum menu)
