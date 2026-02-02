const btnMenu = document.querySelector('.btn-rond-menu');
const navGauche = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');
const mq = window.matchMedia('(max-width: 1300px)');

btnMenu.addEventListener('click', () => {

    ligne.classList.toggle('active');
    navGauche.classList.toggle('menu-visible');
})    

function closeMobileMenuIfNeeded() {
    if (!mq.matches) {
        navGauche.classList.remove('menu-visible');
        ligne.classList.remove('active');
    }
}

mq.addEventListener('change', closeMobileMenuIfNeeded);
closeMobileMenuIfNeeded();

allItemNav.forEach(item => {
    item.addEventListener('click', () => {
        if (!mq.matches) return;
        navGauche.classList.toggle('menu-visible');
        ligne.classList.toggle('active');
    })
})






























