/* Current Date */
const timeParagraph = document.querySelector('.time-container');

const currentDate = new Date();
const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
};

timeParagraph.textContent = currentDate.toLocaleDateString('eng', dateOptions);

/* Burger menu manipulations */
const burgerMenu = document.querySelector('.burger-menu');
const navBar = document.querySelector('nav');
const listItems = document.querySelectorAll('li');
const navBarIcons = document.querySelectorAll('.navbar-icon');
const crossBtn = document.querySelector('.cross-btn');

const openBurgerMenuProcess = () => {
    listItems.forEach(item => item.style.cssText += 'display: block');
    navBarIcons.forEach(item => item.style.cssText += 'display: none' );
    navBar.classList.toggle('visible');
};

const closeBurgerMenuProcess = () => {
    navBar.classList.toggle('visible');
    navBarIcons.forEach(item => item.style.cssText += 'display: block' );
};

burgerMenu.addEventListener('click', openBurgerMenuProcess);
crossBtn.addEventListener('click', closeBurgerMenuProcess);

window.addEventListener('resize', () => {
    switch (true) {
        case window.innerWidth >= 928:
            listItems.forEach(item => item.style.cssText += 'display: block');
            break;
        case window.innerWidth < 928 && window.innerWidth > 765:
            listItems.forEach(item => item.style.cssText += 'display: none');
            if (navBar.classList.contains('visible')) {
                navBar.classList.remove('visible');
            }
            navBarIcons.forEach(item => item.style.cssText += 'display: block' );
            break;
    }
});