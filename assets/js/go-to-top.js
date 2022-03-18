const scrollToTop = document.getElementById('btn-go-to-top')

let lastKnownScrollPosition = 0;
let ticking = false;

scrollToTop.addEventListener('click', function (e) {
    e.preventDefault();

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
});

document.addEventListener('scroll', function (e) {
    lastKnownScrollPosition = window.scrollY;
    
    if (!ticking) {
        window.requestAnimationFrame(function() {
            if (lastKnownScrollPosition < 400) {
              scrollToTop.classList.add('d-none')
            }
            else {
              scrollToTop.classList.remove('d-none')
            }
            ticking = false;
        });
        
        ticking = true;
    }
}, 
{ passive: true });
