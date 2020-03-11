'use strict';
//for NAVIGATION
let navMenu = document.querySelector('.navigation__links');
//for SLIDER
let sliderSection = document.querySelector('.content__slider');
let slide = document.querySelector('.slider')
let clone = slide.innerHTML;
let nextBtn = document.querySelector('.img_next');
let prevBtn = document.querySelector('.img_prev');


navMenu.addEventListener('click', changeLink);
navMenu.addEventListener('click', scrollToSection);
nextBtn.addEventListener('click', changeSlide);
prevBtn.addEventListener('click', changeSlide);


function changeLink(e){
    let child = Array.from(navMenu.children);
    child.forEach(element => {
        element.classList.remove('navigation__link_action');
    });
    if (e.target.tagName === 'LI') e.target.classList.add('navigation__link_action');
}

function scrollToSection(e) {
    let namesSections = {
        home: 'slider',
        services: 'services',
        portfolio: 'portfolio',
        about: 'about',
        contact: 'quote'
    },
        nameClass = `content__${namesSections[e.target.innerHTML]}`;
    if (e.target.tagName === 'LI') {
        let elem = document.querySelector(`.${nameClass}`).getBoundingClientRect();
       window.scrollTo(0, elem.top);
    }

}

function changeSlide() {
    let countChild = slide.children.length;
    if(countChild == 2) {
        slide.innerHTML = '';
        let slideTwo = '<img src="assets/slide2.png" class="slider__img2" alt="image3">';
        slide.innerHTML = slideTwo;
        sliderSection.style.backgroundColor = '#648bf0';
        sliderSection.style.boxShadow = '0 6px #6777ea';
        sliderSection.querySelector('img[alt="image3"]').style.margin = '0 auto';
    } else {
        slide.innerHTML = clone;
        sliderSection.style.backgroundColor = '#f06c64';
        sliderSection.style.boxShadow = '0 6px #ea676b';
    }
}