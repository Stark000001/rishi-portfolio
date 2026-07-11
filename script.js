// ===============================
// Smooth Scroll Navigation
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});




// ===============================
// Typing Effect for Hero Title
// ===============================


const text = "Network & Cybersecurity Engineer";

let index = 0;


function typeEffect() {

    const element = document.querySelector(".hero-content h2");


    if (element && index < text.length) {

        element.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 80);

    }

}



window.addEventListener("load", () => {


    const heading = document.querySelector(".hero-content h2");


    if (heading) {

        heading.innerHTML = "";

        typeEffect();

    }


});





// ===============================
// Scroll Reveal Animation
// ===============================


const revealElements = document.querySelectorAll(

    ".card, .experience-card, section h2"

);



function revealOnScroll(){


    revealElements.forEach(element => {


        const position = element.getBoundingClientRect().top;


        const screenHeight = window.innerHeight;



        if(position < screenHeight - 100){


            element.style.opacity = "1";

            element.style.transform = "translateY(0)";


        }


    });


}



revealElements.forEach(element => {


    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition = "all 0.8s ease";


});



window.addEventListener(

    "scroll",

    revealOnScroll

);



revealOnScroll();






// ===============================
// Active Navigation Highlight
// ===============================


const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");



window.addEventListener("scroll", () => {


    let current = "";


    sections.forEach(section => {


        const sectionTop = section.offsetTop - 150;


        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }


    });



    navLinks.forEach(link => {


        link.style.color = "";


        if(link.getAttribute("href") === "#" + current){

            link.style.color = "#38bdf8";

        }


    });


});






// ===============================
// Current Year Footer Update
// ===============================


const footer = document.querySelector("footer p");


if(footer){


    const year = new Date().getFullYear();


    footer.innerHTML =

    `© ${year} Rishi Sai. All Rights Reserved.`;


}






// ===============================
// Console Developer Message
// ===============================


console.log(

"🚀 Portfolio Loaded Successfully | Network & Cybersecurity Engineer"

);
