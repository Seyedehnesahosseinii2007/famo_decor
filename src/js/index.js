document.addEventListener('DOMContentLoaded', function () {
    // آرایه عنوان‌ها و بخش‌ها به ترتیب
    var headings = [
        document.querySelector('.the-heading-vas'),
        document.querySelector('.the-candle-holder'),
        document.querySelector('.the-glass'),
        document.querySelector('.the-lamp')

    ];
    var sections = [
        document.querySelector('.horizental-one'),
        document.querySelector('.horizental-two'),
        document.querySelector('.horizental-three'),
        document.querySelector('.horizental-four')


    ];

    var btnVase = document.getElementById('btn-vase');
    var btnCandle = document.getElementById('btn-candle');
    var btnGlass = document.getElementById('btn-glass');
    var btnLamp = document.getElementById('btn-lamp');

    function showSection(index) {
        headings.forEach(function (head, i) {
            if (head) head.style.display = (i === index) ? 'block' : 'none';
        });
        sections.forEach(function (sec, i) {
            if (sec) {
                if (i === index) {
                    sec.style.display = 'flex';
                    sec.classList.remove('slide-up-animation');
                    void sec.offsetWidth;
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

    btnVase && btnVase.addEventListener('click', function (e) {
        e.preventDefault();
        showSection(0);
    });
    btnCandle && btnCandle.addEventListener('click', function (e) {
        e.preventDefault();
        showSection(1);
    });
    btnGlass && btnGlass.addEventListener('click', function (e) {
        e.preventDefault();
        showSection(2);
    });
    btnLamp && btnLamp.addEventListener('click', function (e) {
        e.preventDefault();
        showSection(3);
    });
});