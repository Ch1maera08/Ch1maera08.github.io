// Mobile Navbar
function toggleNav() {
var mobileDropdown = document.getElementById("mobile-dropdown");
if (mobileDropdown.style.maxHeight == "100vh") {
    mobileDropdown.style.maxHeight = "0";
} else {
    mobileDropdown.style.maxHeight = "100vh";
}
}

function toggleMangaCat() {
    var mangaCatMenu = document.getElementById("manga-mobile-list");
    if (mangaCatMenu.style.maxHeight == "100vh") {
        mangaCatMenu.style.maxHeight = "0";
        mangaCatMenu.style.padding = "0"
    } else {
        mangaCatMenu.style.maxHeight = "100vh";
    }
}

function toggleLNCat() {
    var LNCatMenu = document.getElementById("ln-mobile-list");
    if (LNCatMenu.style.maxHeight == "100vh") {
        LNCatMenu.style.maxHeight = "0";
        LNCatMenu.style.padding = "0"
    } else {
        LNCatMenu.style.maxHeight = "100vh";
    }
}

function toggleUserCat() {
    var UserCatMenu = document.getElementById("user-mobile-list");
    if (UserCatMenu.style.maxHeight == "100vh") {
        UserCatMenu.style.maxHeight = "0";
        UserCatMenu.style.padding = "0"
    } else {
        UserCatMenu.style.maxHeight = "100vh";
    }
}

function openSearch() {
    document.getElementById("search-bar-overlay").style.height = "auto";
}

function closeSearch() {
    document.getElementById("search-bar-overlay").style.height = "0";
}

// Banner slider script

const carouselSlide = document.querySelector('.carousel-slide');
let carouselImages = document.querySelectorAll('.carousel-slide img');

// slider button
const prevBtn = document.querySelector('#prev-button');
const nextBtn = document.querySelector('#next-button');

// Counter
let counter = 1;
let size = carouselImages[0].clientWidth;

// Resize Listener
window.addEventListener('resize', ()=>{
    size = carouselImages[0].clientWidth;
    console.log(size);
  })


// Banner Image resize
window.addEventListener('resize', ()=>{
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  })

// Clone image reset
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listeners

nextBtn.addEventListener('click',()=>{
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.8s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click',()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.8s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'last-clone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2 ;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'first-clone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter ;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

//timed slide

function timedSlide() {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.8s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

window.setInterval(timedSlide, 10000);

// Budget Add to Cart
function addToCart() {
    document.getElementById("shopping-cart").style.display = 'none';
    document.getElementById("shopping-cart-fill").style.display = 'inherit';
}


