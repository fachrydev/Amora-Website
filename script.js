/* ==========================
MOBILE MENU
========================== */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

```
navMenu.classList.toggle("active");
```

});

}

document.querySelectorAll(".nav-menu a").forEach(link=>{

link.addEventListener("click",()=>{

```
navMenu.classList.remove("active");
```

});

});

/* ==========================
SCROLL REVEAL
========================== */

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:.15
}

);

document.querySelectorAll(

".stat-card,.about-image,.about-card,.category-card,.gallery-card,.why-card,.product-card,.testimonial-card,.location-premium-card"

).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

/* ==========================
NAVBAR SCROLL EFFECT
========================== */

window.addEventListener("scroll",()=>{

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

/* ==========================
COUNTER ANIMATION
========================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

const target = +counter.dataset.target;

const updateCounter = ()=>{

const current = +counter.innerText;

const increment = target / 80;

if(current < target){

counter.innerText = Math.ceil(current + increment);

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

};

updateCounter();

});

/* ==========================
GALLERY LIGHTBOX
========================== */

const galleryImages =
document.querySelectorAll(".gallery-card img");

const lightbox =
document.querySelector(".lightbox");

if(lightbox){

const lightboxImg =
lightbox.querySelector("img");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImg.src = img.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

}

/* ==========================
SCROLL PROGRESS BAR
========================== */

window.addEventListener("scroll",()=>{

const progress =
document.querySelector(".progress-bar");

if(!progress) return;

const totalHeight =
document.documentElement.scrollHeight
window.innerHeight;

const progressHeight =
(window.pageYOffset / totalHeight) * 100;

progress.style.width =
progressHeight + "%";

});
