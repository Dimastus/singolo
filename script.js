'use strict';
//for NAVIGATION
let navMenu = document.querySelector('.navigation__links');
//for PORTFOLIO
let portfolioFilters = document.querySelector('.portfolio__filter');
let galleryImg = document.querySelector('.portfolio__gallery');
//for SLIDER
let sliderSection = document.querySelector('.content__slider');
let slide = document.querySelector('.slider')
let clone = slide.innerHTML;
let nextBtn = document.querySelector('.img_next');
let prevBtn = document.querySelector('.img_prev');


navMenu.addEventListener('click', (e) => changeLink(navMenu, e));
portfolioFilters.addEventListener('click', (e) => changeLink(portfolioFilters, e));
portfolioFilters.addEventListener('click', (e) => randomImg(galleryImg, e));
galleryImg.addEventListener('click', choiceImg);
navMenu.addEventListener('click', scrollToSection);
nextBtn.addEventListener('click', changeSlide);
prevBtn.addEventListener('click', changeSlide);


function changeLink(parent, e) {
    if (e.target.tagName === 'LI' || e.target.tagName === 'DIV' && e.target.classList.contains('filter__name')) {
        let child = Array.from(parent.children);
        let className = child[0].classList[0];

        child.forEach(element => {
            element.classList.remove(`${className}_action`);
        });
        e.target.classList.add(`${className}_action`);
    }
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
        // let elem = document.querySelector(`.${nameClass}`).getBoundingClientRect();
        // window.scrollTo(0, elem.top);
        document.querySelector(`.${nameClass}`).scrollIntoView({block: "start", behavior: "smooth"});
    }

}

function changeSlide() {
    let countChild = slide.children.length;
    if (countChild == 2) {
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

function randomImg(parent, e) {
    if (e.target.tagName === 'DIV' && e.target.classList.contains('filter__name')) {
        let images = Array.from(parent.querySelectorAll('.gallery__img img'));
        let links = [].concat(images).map(e => e.getAttribute('src'));

        images.forEach(element => {
            let link = links[randomInteger(0, links.length - 1)];
            element.setAttribute('src', link);
            links.splice(links.indexOf(link), 1);
        });
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

function choiceImg(e) {
    let elem = e.target;
    if (elem.tagName === "IMG") {
        let images = [...galleryImg.children];
        images.forEach(element => {
            element.children[0].style.transition = 'transform .5s';
            element.style.border = 'none';
            element.children[0].style.margin = '0';
        });

        elem.style.margin = '-5px';
        elem.parentElement.style.border = '5px solid #F06C64';
    }
}