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
