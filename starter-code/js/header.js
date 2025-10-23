let body = document.querySelector("body");
let hamburger = document.querySelector(".header__hamburgerIcon");
let closing = document.querySelector(".header__closingIcon");
//let desktopNav = document.querySelectorAll("nav")[0];
let nav = document.querySelector("nav");
let navLinks = nav.querySelectorAll("a");
let lastNavLink = navLinks[navLinks.length - 1];
let bgImg = document.querySelector(".body__bgImg");

lastNavLink.addEventListener("keydown", (e) => {
  if(e.key === "Tab" && window.innerWidth < 768){
    e.preventDefault();
    closing.focus();
  }
});

// Event listeners for hamburger + function to handle the mobile nav being open
function handleNavActive(){
  hamburger.style.display = "none";
  hamburger.setAttribute("inert", true);

  closing.focus();

  nav.removeAttribute("inert");
  nav.classList.add("active");
}
hamburger.addEventListener("click", () => {
  handleNavActive();
});
hamburger.addEventListener("keydown", (e) => {
  if(e.key === " " || e.key === "Enter"){
    e.preventDefault();
    handleNavActive();
  }
});

// Event listeners for closing + function to handle the mobile nav being closed
function handleNavInactive(){
  nav.classList.remove("active");
  nav.setAttribute("inert", true);

  hamburger.style.display = "block";
  hamburger.removeAttribute("inert");
  hamburger.focus();
}
closing.addEventListener("click", () => {
  handleNavInactive();
});
closing.addEventListener("keydown", (e) => {
  if(e.key === " " || e.key === "Enter"){
    e.preventDefault();
    handleNavInactive();
  }
});

// Handles major screen size changes upon initial load and any resizing
function handleBackgroundImg(){
  if(window.innerWidth >= 768 && window.innerWidth < 1440){
    bgImg.setAttribute("src", "./starter-code/assets/home/background-home-tablet.jpg");
  }
  else if(window.innerWidth >= 1440){
    body.style.backgroundImage = "./starter-code/assets/home/background-home-desktop.jpg";
  }
  else if(window.innerWidth < 768){
    bgImg.setAttribute("src", "./starter-code/assets/home/background-home-mobile.jpg");
  }
}
function handleNavDefaultStates(){
  if(window.innerWidth >= 768){
    hamburger.setAttribute("inert", true);
    nav.removeAttribute("inert");
    nav.classList.remove("active");
  }
  else{
    hamburger.removeAttribute("inert");
    nav.setAttribute("inert", true);
  }
}
function setDefaultStates(){
  navLinks[0].classList.add("activePage");
}
window.addEventListener("load", () => {
  handleBackgroundImg();
  handleNavDefaultStates();
  setDefaultStates();
});
window.addEventListener("resize", () => {
  handleBackgroundImg();
  handleNavDefaultStates();
})