

/* =====================================
   LOADING SCREEN
===================================== */

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        if(loader){
            loader.classList.add("loader-hide");
        }
    }, 1000);
});


/* =====================================
   MOBILE MENU
===================================== */

function toggleMenu() {

    const mobileMenu =
        document.getElementById("mobileMenu");

    if(mobileMenu){
        mobileMenu.classList.toggle("active");
    }

}


/* =====================================
   STICKY HEADER
===================================== */


/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements =
document.querySelectorAll(
'.fade-up, .fade-left, .fade-right'
);

const revealOnScroll = () => {

    revealElements.forEach((el) => {

        const windowHeight =
            window.innerHeight;

        const top =
            el.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            el.classList.add("show");

        }

    });

};

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =====================================
   BACK TO TOP
===================================== */

const backTop =
document.getElementById("backTop");

const floatingWA =
document.querySelector(".floating-wa");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        if(backTop){
            backTop.classList.add("show");
        }

        if(floatingWA){
            floatingWA.classList.add("move-up");
        }

    }else{

        if(backTop){
            backTop.classList.remove("show");
        }

        if(floatingWA){
            floatingWA.classList.remove("move-up");
        }

    }

});

function scrollTopPage(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


/* =====================================
   FLOATING WHATSAPP
===================================== */

function toggleWA(){

    const waList =
        document.getElementById("waList");

    if(waList){

        waList.classList.toggle("active");

    }

}

/* =====================================
   WA MOVE UP WHEN SCROLL
===================================== */

window.addEventListener("scroll", () => {

    const wa =
        document.querySelector(".floating-wa");

    if(!wa) return;

    if(window.scrollY > 300){

        wa.classList.add("move-up");

    }else{

        wa.classList.remove("move-up");

    }

});
/* =====================================
KATA PENGANTAR
===================================== */

function toggleWelcome(){

const fullText =
document.querySelector('.full-text');

const button =
document.querySelector('.read-more-btn');

if(fullText.style.display === "block"){

fullText.style.display = "none";

button.innerHTML =
"Baca Selengkapnya";

window.scrollTo({

top:
document.getElementById("kata-pengantar")
.offsetTop - 90,

behavior:"smooth"

});

}else{

fullText.style.display = "block";

button.innerHTML =
"Tutup";

}

}
/* =====================================
KEUNGGULAN PONDOK
===================================== */
const reveals =
document.querySelectorAll(
'.reveal-left,.reveal-right'
);

function revealAnimation(){

reveals.forEach(item=>{

const top =
item.getBoundingClientRect().top;

if(top < window.innerHeight-100){

item.classList.add(
'reveal-active'
);

}

});

}

window.addEventListener(
'scroll',
revealAnimation
);

revealAnimation();

// ACCORDION PROGRAM UNGGULAN

const accordionItems =
document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {

const header =
item.querySelector(".accordion-header");

header.addEventListener("click", () => {

item.classList.toggle("active");

const content =
item.querySelector(".accordion-content");

if(content.style.maxHeight){

content.style.maxHeight = null;

}else{

content.style.maxHeight =
content.scrollHeight + "px";

}

});

});
/* =========================================
ACCORDION BIAYA PENDIDIKAN
========================================= */

document
.querySelectorAll('.ppdb-biaya-header')
.forEach(button => {

button.addEventListener('click', () => {

const currentCard =
button.parentElement;

/* tutup card lain */

document
.querySelectorAll('.ppdb-biaya-card')
.forEach(card => {

if(card !== currentCard){

card.classList.remove('active');

}

});

/* buka card yang diklik */

currentCard.classList.toggle('active');

});

});
/* =========================================
ACCORDION FAQ PPDB
========================================= */

document
.querySelectorAll('.ppdb-faq-question')
.forEach(button => {

button.addEventListener('click', () => {

const currentItem =
button.parentElement;

document
.querySelectorAll('.ppdb-faq-item')
.forEach(item => {

if(item !== currentItem){

item.classList.remove('active');

}

});

currentItem.classList.toggle('active');

});

});
/*-- =====================================
JAVASCRIPT SEJARAH PONDOK
===================================== --*/

function toggleHistory(button){

const fullText =
button.parentElement.querySelector('.history-full');

if(fullText.style.display === "block"){

fullText.style.display = "none";

button.innerHTML =
"Baca Selengkapnya";

document
.getElementById("sejarah-pondok")
.scrollIntoView({

behavior:"smooth",
block:"start"

});

}else{

fullText.style.display = "block";

button.innerHTML =
"Tutup";

}

}
/* =========================================
ANIMASI SCROLL
========================================= */

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

document
.querySelectorAll(".fade-up")
.forEach(el=>{

observer.observe(el);

});
/* =========================================
KATA PENGANTAR EKSTRAKURIKULER
========================================= */

function toggleExWelcome(button){

const fullText =
button.parentElement.parentElement.querySelector('.full-text');

if(fullText.style.display === "block"){

fullText.style.display = "none";

button.innerHTML =
"Baca Selengkapnya";

window.scrollTo({

top:
document.getElementById("pengantar-ekstrakurikuler")
.offsetTop - 90,

behavior:"smooth"

});

}else{

fullText.style.display = "block";

button.innerHTML =
"Tutup";

}

}

/* =========================================
BACA SELENGKAPNYA KATA PENGANTAR PROGRAM DAKWAH
========================================= */

function toggleDakwahIntro() {

    const content =
    document.getElementById("dakwahMore");

    const button =
    document.querySelector(".intro-toggle-btn");

    content.classList.toggle("active");

    if (content.classList.contains("active")) {

        button.textContent = "Tutup";

    } else {

        button.textContent = "Baca Selengkapnya";

    }

}
/* =========================================
BACA SELENGKAPNYA GALERI
========================================= */

document
.querySelectorAll(".gallery-readmore-btn")
.forEach(button=>{

button.addEventListener("click",()=>{

const wrapper =
button.parentElement
.querySelector(".gallery-text-wrapper");

wrapper.classList.toggle("active");

if(wrapper.classList.contains("active")){

button.textContent =
"Tutup";

}else{

button.textContent =
"Baca Selengkapnya";

}

});

});
/* =========================================
FILTER GALERI
========================================= */

const filterButtons =
document.querySelectorAll(".gallery-filter-btn");

const galleryItems =
document.querySelectorAll(".gallery-item");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>
btn.classList.remove("active")
);

button.classList.add("active");

const filter =
button.getAttribute("data-filter");

galleryItems.forEach(item=>{

if(
filter==="all" ||
item.dataset.category===filter
){

item.style.display="block";

}else{

item.style.display="none";

}

});

});

});
/* =========================================
BACA SELENGKAPNYA KATA PENGANTAR PPDB
========================================= */
function togglePPDBIntro(){

const content =
document.getElementById("ppdbMoreContent");

const button =
document.querySelector(".ppdb-readmore-btn");

const text =
button.querySelector(".btn-text");

content.classList.toggle("active");

button.classList.toggle("active");

if(content.classList.contains("active")){

text.textContent = "Tutup";

}else{

text.textContent = "Baca Selengkapnya";

}

}

/* =========================================
BACA SELENGKAPNYA LOKASI
========================================= */

const lokasiBtn =
document.getElementById(
"lokasiReadMoreBtn"
);

const lokasiText =
document.getElementById(
"lokasiText"
);

const lokasiArrow =
document.getElementById(
"lokasiArrow"
);

if(lokasiBtn){

lokasiBtn.addEventListener(
"click",

function(){

lokasiText.classList.toggle(
"active"
);

lokasiArrow.classList.toggle(
"rotate"
);

if(
lokasiText.classList.contains(
"active"
)
){

lokasiBtn.querySelector(
"span"
).textContent =
"Baca Lebih Sedikit";

}else{

lokasiBtn.querySelector(
"span"
).textContent =
"Baca Selengkapnya";

}

});

}
