/* SHOW/HIDE MENU */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


/* SHOW MENU */
/* Validate if constant exists then shows menu */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });
};


/* HIDE MENU */
/* Validate if constant exists then hide menu */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    });
};


/* REMOVE MENU (MOBILE) */
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/* ACCORDION SKILLS */
const skillsContent = document.getElementsByClassName('skills_content');
const skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills() {
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close'
    };
    if (itemClass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open'
    };
};

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
});


/* QUALIFICATION TABS */
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        });
        target.classList.add('qualification_active')

        tabs.forEach(tab => {
            tab.classList.removw('qualification_active')
        });
        tab.classList.add('qualification_active')
    });
});


/* SERVICES MODAL */
const modalViews = document.querySelectorAll('.services_modal');
const modalBtns = document.querySelectorAll('.services_button');
const modalClose = document.querySelectorAll('.services_modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i)  => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    });
});

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        });
    });
});


/* PORTFOLIO SWIPER */
let swiperPortfolio = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


/* TESTIMONIALS */
let swiperTestimonial = new Swiper(".testimonial_container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    }
});