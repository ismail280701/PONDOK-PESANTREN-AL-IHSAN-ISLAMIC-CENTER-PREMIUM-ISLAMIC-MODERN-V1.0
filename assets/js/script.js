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

window.addEventListener("scroll", () => {

    const header =
        document.querySelector("header");

    if(!header) return;

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});


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

function toggleWelcome(){

const text =
document.querySelector('.full-text');

const btn =
document.querySelector('.read-more-btn');

text.classList.toggle('show');

if(text.classList.contains('show')){
btn.innerHTML='Tutup';
}else{
btn.innerHTML='Baca Selengkapnya';
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
