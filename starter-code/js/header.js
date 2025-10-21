let body = document.querySelector("body");
let hamburger = document.querySelector(".header__hamburgerIcon");
let closing = document.querySelector(".header__closingIcon");
let nav = document.querySelector("nav");

let navLinks = nav.querySelectorAll("a  ");

// Event listeners for hamburger + function to handle the mobile nav being open
function handleNavActive(){
  hamburger.classList.add("inactive");
  hamburger.setAttribute("inert", true);
  nav.removeAttribute("inert");
  nav.classList.add("active");
}
hamburger.addEventListener("click", () => {
  handleNavActive();
});
hamburger.addEventListener("keydown", (e) => {
  if(e.key === " " || e.key === "Enter"){
    handleNavActive();
  }
});

// Event listeners for closing + function to handle the mobile nav being closed
function handleNavInactive(){
  nav.classList.remove("active");
  nav.setAttribute("inert", true);
  hamburger.classList.remove("inactive");
  hamburger.removeAttribute("inert");
}
closing.addEventListener("click", () => {
  handleNavInactive();
});
closing.addEventListener("keydown", (e) => {
  if(e.key === " " || e.key === "Enter"){
    handleNavInactive();
  }
});

// Handles major screen size changes upon initial load and any resizing
function handleBackgroundImg(){
  if(window.innerWidth >= 768 && window.innerWidth < 1440){
    body.style.backgroundImage = "url(./starter-code/assets/home/background-home-tablet.jpg)";
  }
  else if(window.innerWidth >= 1440){
    body.style.backgroundImage = "url(./starter-code/assets/home/background-home-desktop.jpg)";
  }
  else if(window.innerWidth < 768){
    body.style.backgroundImage = "url(./starter-code/assets/home/background-home-mobile.jpg)";
  }
}
function handleMobileMenuDefaultStates(){
  if(window.innerWidth >= 768){
    hamburger.setAttribute("inert", true);
    nav.removeAttribute("inert");
  }
  else{
    hamburger.removeAttribute("inert");
    nav.setAttribute("inert", true);
  }
}
function setDefaultStates(){
  navLinks[0].classList.add("activePage");
}
window.onload = () => {
  handleBackgroundImg();
  handleMobileMenuDefaultStates();
  setDefaultStates();
};
window.addEventListener("resize", () => {
  handleBackgroundImg();
  handleMobileMenuDefaultStates();
})