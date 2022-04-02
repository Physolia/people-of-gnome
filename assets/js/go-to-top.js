const scrollToTop = document.getElementById('btn-go-to-top');

let lastKnownScrollPosition = 0;
let ticking = false;

scrollToTop.addEventListener('click', (e) => {
    e.preventDefault();

    scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
});

document.addEventListener(
    'scroll',
    () => {
        lastKnownScrollPosition = window.scrollY;

        if (!ticking) {
            requestAnimationFrame(() => {
                if (lastKnownScrollPosition < 400) {
                    scrollToTop.classList.add('d-none');
                } else {
                    scrollToTop.classList.remove('d-none');
                }
                ticking = false;
            });

            ticking = true;
        }
    },
    { passive: true }
);
