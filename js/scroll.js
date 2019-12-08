const navbar = document.getElementById("navbar");
const main = document.getElementById("main");
const navbarToggle = document.getElementById("navi-toggle");

const offset = 62;

let xPos, yPos;

window.onscroll = () => {

    // Scroll to the position where checkbox was checked
    // i.e; DON'T MOVE!
    if(navbarToggle.checked) { 
        window.scrollTo(xPos, yPos);
    }

    if(window.pageYOffset > offset * 0.5) {
        navbar.classList.add("navigation--invisible");
    }

    if(window.pageYOffset > offset) {
        navbar.classList.add("navigation--sticky-reveal");
        navbar.classList.remove("navigation--invisible");
        navbar.classList.add("navigation--visible");
    }
    else {
        navbar.classList.remove("navigation--sticky-reveal");
        navbar.classList.remove("navigation--invisible");
        navbar.classList.remove("navigation--visible");
    }
};

navbarToggle.addEventListener("change", () => { 
    
    // Add class to hide scrolling: Transition kinda looks ugly
    // if(navbarToggle.checked) {
    //     main.classList.add("prevent-scrolling");
    // }
    // else {
    //     main.classList.remove("prevent-scrolling");
    // }

    // OR get the x and y position
    // and use them to scroll that place above
    if(navbarToggle.checked) {
        yPos = window.pageYOffset || document.documentElement.scrollTop;
        xPos = window.pageXOffset || document.documentElement.scrollLeft;
    }
});