const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
const fullImgContainer = document.getElementById('fullImgContainer');
const fullImg = document.getElementById('fullImg');
const images = ['t-01.jpg','t-02.jpg','t-03.jpg','t-04.jpg','t-05.jpg','t-06.jpg','t-07.jpg','t-08.jpg','t-09.jpg','t-10.jpg','t-11.jpg','t-12.jpg','t-13.jpg','t-14.jpg','t-15.jpg','t-16.jpg','t-17.jpg','t-18.jpg'];
let i = 0;    // Current image index


// Hamburger Open/Close Toggle
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// Close Hamburger Window
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


// Gallery Full Image Show
function openFullImg(pic) {
    fullImgContainer.style.display = 'flex';
    fullImg.src = pic;
}
// Gallery Button: Close of Full Image
function closeFullImg(pic) {
    fullImgContainer.style.display = 'none';
}


// Gallery Button: Previous
function prev() {
    if(i <= 0) i = images.length;
    i--;
    return setImg();
}
// Gallery Button: Next
function next() {
    if(i >= images.length - 1) i = -1;
    i++;
    return setImg();
}
function setImg() {
    return fullImg.setAttribute('src', 'img/' + images[i]);
}


// Scroll To Top
const scrollBtn = document.querySelector('.scroll-to-top');

const refreshButtonVisibility = () => {
    if(document.documentElement.scrollTop <= 150) { // Current Scroll Top is below 150
        scrollBtn.style.display = 'none';
    } else {
        scrollBtn.style.display = 'block';
    }
};
refreshButtonVisibility();      // To fix the browser issue 

scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

document.addEventListener('scroll', (e) => {
    refreshButtonVisibility();
});